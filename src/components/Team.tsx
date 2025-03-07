import React from "react";

interface TeamMember {
  name: string;
  linkedinId: string;
}

interface CommitteeSection {
  title: string;
  members: TeamMember[];
}

const TeamPage: React.FC = () => {
  const committees: CommitteeSection[] = [
    {
      title: "Organization Secretaries",
      members: [
        { name: "Dr. Deepika Pantola", linkedinId: "Dr. Deepika Pantola" },
        { name: "Dr. Anuj Bharti ", linkedinId: "john-doe-456" },
        { name: "Dr. Madhuri Gupta", linkedinId: "sarah-johnson-789" },
        { name: "Dr. Deepika Vatsa", linkedinId: "sarah-johnson-789" },
        { name: "Dr. Mohd. Abuzar Sayeed", linkedinId: "sarah-johnson-789" },

      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Manish Raj ", linkedinId: "robert-chen-234" },
        { name: "Dr. Shakti Sharma ", linkedinId: "maria-garcia-567" },
        { name: "Dr. Mukund Pratap Singh ", linkedinId: "david-wilson-890" },
        { name: "Dr. Naween Kumar", linkedinId: "emily-brown-123" },
        { name: "Dr. Anu Rani", linkedinId: "emily-brown-123" },
        { name: "Dr. Garima Jaiswal ", linkedinId: "emily-brown-123" },
        { name: "Dr. Gitika Sharma", linkedinId: "emily-brown-123" },
        { name: "Dr. Riti Kushwaha ", linkedinId: "emily-brown-123" },

      ],
    },
    {
      title: "Local Organizing Committee",
      members: [
        { name: "Ms. Ankita Sharma ", linkedinId: "michael-lee-345" },
        { name: "Ms. Priyanka Chauhan", linkedinId: "jennifer-taylor-678" },
        { name: "Mr. Kundan", linkedinId: "james-anderson-901" },
      ],
    },
    {
      title: "Student Organizing Committee",
      members: [
        { name: "Alex Rodriguez", linkedinId: "alex-rodriguez-456" },
        { name: "Sophia Kim", linkedinId: "sophia-kim-789" },
        { name: "Ryan Patel", linkedinId: "ryan-patel-012" },
        { name: "Emma Martinez", linkedinId: "emma-martinez-345" },
      ],
    },
  ];

  return (
    <section
      id="team"
      className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-gray-900"
    >
      <h1 className="text-3xl font-bold text-center mb-10">Our Team</h1>

      {committees.map((committee, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-300">
            {committee.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a
                    href={`https://linkedin.com/in/${member.linkedinId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {member.linkedinId}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamPage;
