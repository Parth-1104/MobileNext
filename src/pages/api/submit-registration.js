import { chromium } from 'playwright';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse the request body explicitly
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { salutation, name, affiliation, enrollmentNo, role, email, contactNo } = body;
    
    // Log received data for debugging
    console.log('Received form data:', { salutation, name, affiliation, enrollmentNo, role, email, contactNo });
    
    // Validate required fields
    if (!name || !enrollmentNo || !role || !email || !contactNo) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Validate enrollment number is numeric
    if (isNaN(enrollmentNo)) {
      return res.status(400).json({ message: 'Enrollment number must be numeric' });
    }
    
    // Validate contact number is numeric
    if (isNaN(contactNo)) {
      return res.status(400).json({ message: 'Contact number must be numeric' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    let browser;
    
    try {
      // Launch a browser instance
      browser = await chromium.launch({ 
        headless: true // Set to false for debugging
      });
      
      const context = await browser.newContext();
      const page = await context.newPage();
      
      // Navigate to the Microsoft Form
      await page.goto('https://forms.office.com/r/pDcifWWWnm', { 
        waitUntil: 'networkidle' 
      });
      
      // Log what's going on
      console.log('Filling out form for:', name);
      
      // Wait for form to be fully loaded
      await page.waitForSelector('form');
      
      // Fill out the form fields
      // 1. Salutation
      switch (salutation) {
        case 'Dr.':
          await page.click('text="Dr."');
          break;
        case 'Mr.':
          await page.click('text="Mr."');
          break;
        case 'Ms.':
          await page.click('text="Ms."');
          break;
      }
      
      // 2. Name
      const nameField = await page.locator('input[aria-label="Name"]').first();
      await nameField.fill(name);
      
      // 3. Affiliation
      if (affiliation === 'Bennett University') {
        await page.click('text="Bennett University"');
      } else {
        await page.click('text="Other"');
      }
      
      // 4. Enrollment No./Emp ID
      const enrollmentField = await page.locator('input[aria-label="Enrollment No./Emp ID"]').first();
      await enrollmentField.fill(enrollmentNo);
      
      // 5. Role
      switch (role) {
        case 'Student':
          await page.click('text="Student"');
          break;
        case 'Faculty':
          await page.click('text="Faculty"');
          break;
        case 'Industry professional':
          await page.click('text="Industry professional"');
          break;
      }
      
      // 6. Email ID
      const emailField = await page.locator('input[type="email"]').first();
      await emailField.fill(email);
      
      // 7. Contact No.
      const contactField = await page.locator('input[aria-label="Contact No."]').first();
      await contactField.fill(contactNo);
      
      // Submit the form
      await page.click('button[type="submit"]');
      
      // Wait for confirmation (Microsoft forms typically show a "Thanks for submitting" page)
      await page.waitForSelector('text=Thank you for your response', { timeout: 10000 });
      
      console.log('Form submitted successfully for:', name);
      
      // Return success with proper headers
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json({ 
        success: true,
        message: 'Registration submitted successfully'
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      // Return error with proper headers
      res.setHeader('Content-Type', 'application/json');
      return res.status(500).json({ 
        success: false,
        message: 'Failed to submit registration',
        error: error.message
      });
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  } catch (parseError) {
    console.error('Request parsing error:', parseError);
    res.setHeader('Content-Type', 'application/json');
    return res.status(400).json({ 
      success: false, 
      message: 'Failed to parse request body',
      error: parseError.message
    });
  }
}