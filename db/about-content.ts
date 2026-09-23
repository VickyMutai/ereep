export type AboutItem = { title: string; body: string };
export type AboutContent = {
  heroTitle: string;
  heroLead: string;
  historyTitle: string;
  historyLead: string;
  history: AboutItem[];
  projectsTitle: string;
  projectsLead: string;
  projects: AboutItem[];
  todayTitle: string;
  todayLead: string;
  todayBody: string;
  vision: string;
  mission: string;
  values: AboutItem[];
  approachTitle: string;
  approachLead: string;
  approachBody: string;
};

export const defaultAboutContent: AboutContent = {
  heroTitle: 'A journey that began by listening.',
  heroLead: 'Every lasting change begins with understanding people, their experiences and their hopes for a better future.',
  historyTitle: 'Our history',
  historyLead: 'From peacebuilding and recovery to a locally led community organisation.',
  history: [
    {
      title: 'Established by the Edmund Rice Christian Brothers',
      body: 'The story of Edmund Rice Eldoret Empowerment Program (EREEP) began in 2013, when the Christian Brothers of the East Africa District set out to explore how they could respond to the needs of communities in Eldoret. Rather than arriving with ready-made solutions, they chose to listen first. Through community engagement, they spent time with residents in Langas and Yamumbi, learning about the realities facing children, young people, women and families.\n\nThese conversations revealed communities rich in resilience, but facing complex social and economic challenges. Many families were still recovering from the effects of the 2007-2008 post-election violence. Children and young people faced barriers to education, unemployment was widespread, and substance abuse and crime affected many households. Women who had been displaced by the violence were also struggling to rebuild their livelihoods and lives.\n\nYet alongside these challenges was a strong desire for healing, reconciliation and a better future. Community members were willing to come together, despite the ethnic and social divisions that had been deepened by the violence.',
    },
    {
      title: 'A peacebuilding foundation',
      body: 'EREEP\'s first initiatives were rooted in peacebuilding and community reconciliation. The aim was not only to respond to immediate needs, but to create opportunities for people from different cultural backgrounds to come together, rebuild relationships and strengthen a sense of shared community.\n\nOne of the first initiatives was the Edmund Rice Camps, which brought children and young people from different backgrounds together in safe and inclusive spaces. Through games, learning, interaction, reflection and shared activities, the camps encouraged friendship, understanding and respect across cultural and social differences.\n\nAlongside the camps, EREEP supported poultry farming for Yamumbi women who had been displaced by the post-election violence. The initiative provided an opportunity for women to rebuild livelihoods while working together and strengthening relationships across communities.\n\nThese early initiatives combined peacebuilding with empowerment. By bringing people together around practical activities, learning and shared experiences, EREEP sought to rebuild trust, strengthen relationships and create opportunities for people to move forward together.',
    },
    {
      title: 'Growing with the community',
      body: 'As EREEP\'s relationship with the community deepened, families, schools, community leaders and local partners continued to identify emerging needs and opportunities. What began through peacebuilding and community recovery gradually grew into a broader community empowerment programme, responding to the changing realities of the people it served.\n\nIn 2018, this growing initiative was formally registered as the Edmund Rice Eldoret Empowerment Program (EREEP), a Community-Based Organisation committed to promoting dignity, inclusion, justice and community-led development.\n\nDuring this period, the organisation was led by the Christian Brothers, with support from dedicated volunteers who helped deliver activities and maintain strong connections with the community.',
    },
    {
      title: 'A period of disruption and reflection',
      body: 'The COVID-19 pandemic brought a significant interruption to EREEP\'s work and changed the realities of the communities it served. Many families experienced increased economic hardship, disruption to education, loss of livelihoods and greater vulnerability among children, young people and other at-risk groups.\n\nThe period also provided an opportunity for EREEP to reflect on how it could remain relevant and responsive in a changing environment. As communities began to recover, it became increasingly clear that their needs had evolved and required new approaches, stronger local participation and a more responsive way of working.',
    },
    {
      title: 'Adapting to new realities',
      body: 'Following the pandemic, EREEP began to strengthen and adapt its organisational structure, programmes and ways of working to respond more effectively to emerging community needs. The organisation moved beyond its earlier programme model towards a more integrated approach that placed greater emphasis on local leadership, participation, partnerships and responding to the interconnected challenges facing the community.\n\nThis evolution also strengthened the foundation for EREEP\'s transition towards greater local management and leadership, while maintaining the oversight, values and support of the Edmund Rice Christian Brothers.',
    },
    {
      title: 'A growing locally led organisation',
      body: 'In 2021, EREEP began bringing lay staff from the community into project management and implementation. Working alongside the Christian Brothers and volunteers, the new team brought additional skills, experience and a deeper connection to the communities EREEP serves. This marked an important stage in EREEP\'s development. The organisation continued to grow its programmes while strengthening local ownership and participation in its work.\n\nToday, EREEP implements three integrated projects responding to the diverse and interconnected needs of children, young people, girls, young mothers, persons with disabilities, caregivers and the wider community.',
    },
  ],
  projectsTitle: 'Three integrated projects',
  projectsLead: 'Responding to the diverse and interconnected needs of the community.',
  projects: [
    { title: 'Children and Youth Project', body: 'The Children and Youth Project, EREEP\'s foundational project, was restructured in 2021 to strengthen its approach to supporting children and young people. The project creates opportunities for children and young people to develop knowledge, positive life skills, confidence and leadership, while strengthening their understanding of rights, protection and positive relations.' },
    { title: 'Wezesha Dada Girls Empowerment Project', body: 'The Wezesha Dada Girls Empowerment Project was piloted for one year in 2022 and, following the pilot, was formally rolled out as a three-year project in 2024. The project supports girls and young mothers through education, mentorship, sexual and reproductive health education, psychosocial support and economic empowerment, helping them overcome barriers, exercise their rights and build more independent futures.' },
    { title: 'Breaking Disability Barriers Project', body: 'The Breaking Disability Barriers Project, launched in 2025, promotes the rights, inclusion and participation of persons with disabilities while supporting caregivers, schools and communities to challenge stigma, reduce barriers and create more inclusive environments.' },
  ],
  todayTitle: 'EREEP today',
  todayLead: 'Growing in reach, strengthening local leadership, rooted in purpose.',
  todayBody: 'EREEP has grown from its early peacebuilding initiatives into an organisation with broader programmes, stronger community partnerships and a locally led team. Today, the organisation is fully managed by lay staff, with continued oversight and support from the Edmund Rice Christian Brothers.\n\nWhile EREEP has grown in reach, programmes and local leadership, its purpose remains rooted in the values that shaped its beginnings: listening to communities, walking alongside people, promoting dignity and inclusion, and creating opportunities for lasting change.\n\nEREEP continues to believe that when people have the knowledge, confidence, opportunities and supportive partnerships they need, they become active participants in shaping their own lives and communities.',
  vision: 'Empowered, Liberated and Transformed lives of the marginalized Langas community.',
  mission: 'To seek the liberation of marginalized children, youth and vulnerable Langas Communities, through empowering education for a dignified personal life, human rights advocacy, communal growth and development.',
  values: [
    { title: 'Liberation through Empowerment', body: 'EREEP believes in creating opportunities that enable people to understand their potential, overcome barriers, and take an active role in shaping their lives and communities.' },
    { title: 'Inclusion, Integrity and Compassion', body: 'Every person deserves to be treated with dignity, honesty, care, and respect, regardless of their circumstances or abilities.' },
    { title: 'Accountability and Transparency', body: 'EREEP is committed to acting with openness, integrity and responsibility in its decisions, actions and relationships, and to being accountable to the people and communities it serves.' },
    { title: 'Presence and Commitment', body: 'Meaningful change requires being present, listening to communities, understanding their realities, and remaining committed to the people and communities served.' },
    { title: 'Respectful Community Engagement', body: 'EREEP values the knowledge, experiences, and contribution of community members and promotes their meaningful participation in matters that affect their lives.' },
    { title: 'Advocacy for Human Rights and Social Justice', body: 'The organisation promotes dignity, equality, participation, and the rights of people who experience disadvantage or exclusion.' },
    { title: 'Partnerships and Collaboration', body: 'EREEP recognises that lasting change is strengthened when communities, institutions, government, development partners, and other stakeholders work together.' },
  ],
  approachTitle: 'Our approach',
  approachLead: 'Building Knowledge, Skills, Leadership and Local Power for Lasting Change.',
  approachBody: 'EREEP believes that lasting change begins with people. When people understand their rights, recognise their strengths and have the knowledge, confidence and opportunities to participate, they are better able to shape solutions to the challenges affecting their lives and communities.\n\nEREEP works alongside people and communities, rather than simply working for them. The organisation listens to community needs, builds on local strengths and works with children, young people, caregivers, persons with disabilities, women, families, schools, community leaders and other local actors to strengthen their capacity to create change.\n\nThrough education, mentorship, advocacy, community engagement, referral support and livelihood opportunities, EREEP creates spaces for people to learn, participate, speak up and take action. Partnerships with schools, government, community structures and other organisations strengthen these efforts and connect people with the services, opportunities and support they need.\n\nThe approach is grounded in community participation, inclusion, dignity and local ownership. EREEP seeks to strengthen people\'s ability to make informed decisions, support one another, advocate for their rights and contribute to positive change within their families and communities. By investing in people and strengthening the structures around them, EREEP works towards safer, more inclusive, empowered and resilient communities where people are able to shape their own futures and sustain positive change.',
};

export async function getAboutContent(): Promise<AboutContent> {
  return defaultAboutContent;
}
