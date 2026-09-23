export type ProjectArea = { title: string; subtitle: string; body: string };
export type ProjectContent = {
  title: string;
  shortTitle: string;
  tagline: string;
  overview: string;
  goal: string;
  image: string;
  areas: ProjectArea[];
};
export type ProjectsContent = {
  heroTitle: string;
  heroLead: string;
  sectionTitle: string;
  sectionLead: string;
  projects: ProjectContent[];
  advocacyTitle: string;
  advocacyTagline: string;
  advocacyBody: string;
};

export const defaultProjectsContent: ProjectsContent = {
  heroTitle: 'People are at the heart of every project.',
  heroLead: 'EREEP creates practical spaces where children, young people, girls, young mothers, persons with disabilities and caregivers can learn, participate and shape their futures.',
  sectionTitle: 'Three projects. One shared purpose.',
  sectionLead: 'Our projects respond to different stages of life and interconnected community needs while strengthening dignity, rights, confidence and local leadership.',
  projects: [
    {
      title: 'Children and Youth Project',
      shortTitle: 'CYP',
      tagline: 'Children and young people are at the heart of thriving communities.',
      overview: 'The Children and Youth Project (CYP) is the foundation of EREEP\'s work. What began with a focus on children and young people has grown into a programme that supports them through different stages of their development, helping them learn, build confidence, make positive choices, understand their rights, stay safe and participate meaningfully in their communities.\n\nCYP works with children, adolescents and out-of-school youth, while also engaging parents and caregivers, teachers, community leaders and other local actors. The project currently works with local public secondary schools and comprehensive primary schools in Langas.',
      goal: 'To support and improve the developmental wellbeing of children and young people in Langas community.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=86',
      areas: [
        {
          title: 'Msingi Bora Children Life Skills',
          subtitle: 'Learning that goes beyond the classroom',
          body: 'For pre-teen children, growing up brings new experiences, questions and opportunities to discover who they are and what they can become. Through Msingi Bora, EREEP provides an alternative learning space where children participate in engaging, child-centred activities that support their personal and social development.\n\nThrough interactive learning, games, discussions, talent discovery and social activities, children are encouraged to learn from one another, express their ideas, develop their strengths and build positive relationships. The approach complements formal education by developing life skills, confidence, positive behaviour and character in practical, participatory ways.',
        },
        {
          title: 'Teen Life Skills, Mentorship and Peer Support',
          subtitle: 'Supporting young people as they navigate adolescence',
          body: 'EREEP works with adolescents in Junior and Senior Secondary schools across Langas, providing life skills, mentorship and peer-support opportunities that respond to the realities young people face as they grow and prepare for adulthood.\n\nLife skills sessions help young people interact, share experiences and build practical skills. Vetted and trained EREEP youth volunteers and experienced mentors offer guidance, encouragement and safe spaces. Selected peer leaders are also equipped to support classmates, promote positive choices and connect peers to appropriate support.',
        },
        {
          title: 'Child Rights Education',
          subtitle: 'Knowing your rights. Building confidence. Finding your voice.',
          body: 'The project provides child rights education to learners in Junior Secondary schools, helping children understand their rights, protection and safeguarding in ways that connect with everyday experiences.\n\nRights education also emphasises responsibilities. Learners are encouraged to respect the rights and dignity of others, make responsible choices and contribute to safer environments. By combining rights education with life skills and safeguarding, EREEP helps children speak up, seek support and play an active role in protecting themselves and others.',
        },
        {
          title: 'Safer and Supportive Environments',
          subtitle: 'Building a stronger circle of care around children',
          body: 'A child\'s wellbeing is shaped by the people and environments around them. Parents, caregivers, teachers, community leaders and others all have a role in creating spaces where children feel safe, heard, valued, respected and protected.\n\nPositive parenting, open communication, child rights awareness and strong safeguarding practices help create nurturing spaces. EREEP works towards communities where children are protected from harm and free to learn, grow, develop their potential and thrive.',
        },
        {
          title: 'Young People as Part of the Solution',
          subtitle: 'Young people have a voice, ideas and a role to play',
          body: 'Young people are not simply preparing for the future; they are already part of their families, schools and communities today. Through leadership, mentorship and peer-support opportunities, they are encouraged to recognise their strengths, use their voices and take greater responsibility for themselves and others.\n\nPeer leaders offer encouragement, share positive messages and help classmates know when and where to seek support. EREEP creates space for young people to participate meaningfully and help shape safer, stronger and more supportive communities.',
        },
      ],
    },
    {
      title: 'Wezesha Dada Girls Empowerment Project',
      shortTitle: 'Wezesha Dada',
      tagline: 'Creating a future where girls can thrive.',
      overview: 'Growing up as a girl is great, but it can also come with barriers that affect access to education, enjoyment of rights, informed personal choices and the ability to pursue aspirations.\n\nWezesha Dada creates spaces where girls can gain knowledge, build confidence, understand and exercise their rights, and make informed decisions about their health, education and futures. The project also engages boys, families, teachers and community actors to create environments where girls can learn, participate and thrive.\n\nThrough sexual and reproductive health and rights education, menstrual health support, mentorship, gender equality, psychosocial support and economic empowerment, the project responds to social, practical and economic barriers affecting girls.',
      goal: 'To strengthen girls\' knowledge, confidence, rights, wellbeing and opportunities while creating supportive environments around them.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=86',
      areas: [
        {
          title: 'Supporting Girls to Shape Their Futures',
          subtitle: 'Knowing more, choosing wisely, shaping her future',
          body: 'Wezesha Dada provides teenage girls in secondary schools with age-appropriate sexual and reproductive health and rights education. Safe conversations help girls understand their bodies, health, relationships, wellbeing, education and future, recognise risky situations and make choices that protect their rights and aspirations.\n\nReusable sanitary pads and menstrual health education help girls manage their periods with dignity, confidence and comfort. By bringing together knowledge, confidence and practical support, the project helps girls stay engaged in education and pursue their aspirations.',
        },
        {
          title: 'Boys as Partners for Gender Equality',
          subtitle: 'Building respect, understanding and positive masculinity',
          body: 'Gender equality cannot be achieved by empowering girls alone. Wezesha Dada creates opportunities for teenage boys to explore what it means to be a young man, reflect on attitudes and expectations, and consider how their choices affect others.\n\nThrough positive masculinity and gender equality conversations, boys learn that equality creates healthier relationships and better opportunities for everyone. They are encouraged to become positive allies who challenge harmful attitudes and contribute to respectful, inclusive environments.',
        },
        {
          title: 'Supporting Young and Teenage Mothers',
          subtitle: 'Rebuilding confidence, strengthening agency and creating new possibilities',
          body: 'Young and teenage mothers can face stigma, isolation, interrupted education and uncertainty. Wezesha Dada creates supportive spaces where they can strengthen self-worth, reflect on their experiences and look towards the future with greater hope and purpose.\n\nParticipants learn about sexual and reproductive health and rights, child rights, safeguarding and parenting. The project strengthens their confidence and ability to make choices while creating opportunities for more independent and secure futures.',
        },
        {
          title: 'Building Economic Independence',
          subtitle: 'Practical skills, saving and pathways to income',
          body: 'Wezesha Dada provides vocational and practical skills training in areas such as hairdressing, tailoring, fashion and beauty therapy. These skills create opportunities for young mothers to earn a living and become less dependent on others.\n\nSILC savings groups enable members to save regularly, access loans and invest in businesses and income-generating activities. Together, skills development and saving help young and teenage mothers support their families and move towards greater economic independence.',
        },
        {
          title: 'Strengthening Care Around Girls',
          subtitle: 'A stronger circle of support for every girl',
          body: 'A girl\'s journey is shaped by more than what she knows. Trusted caregivers, supportive teachers and connected community stakeholders help girls ask questions, seek help, stay engaged in school and make informed decisions.\n\nWhen relationships across homes, schools and communities come together, they create a stronger circle of care where girls can speak, seek support and know that someone will listen.',
        },
      ],
    },
    {
      title: 'Breaking Disability Barriers Project',
      shortTitle: 'BDB',
      tagline: 'Creating a community where everyone belongs.',
      overview: 'Disability should never be a barrier to dignity, opportunity or participation. Yet for many persons with disabilities, barriers come not only from their circumstances, but from the attitudes, environments and systems around them.\n\nThe Breaking Disability Barriers Project walks alongside persons with disabilities, caregivers and the people around them to challenge these barriers and build a community where everyone is understood, included and supported to participate, exercise their rights and thrive.',
      goal: 'To promote the rights, inclusion, participation and economic independence of persons with disabilities and their caregivers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=86',
      areas: [
        {
          title: 'Understanding and Inclusive Support',
          subtitle: 'Seeing ability and creating spaces where everyone can participate',
          body: 'Inclusion begins with understanding disability and how we see one another. The project helps persons with disabilities understand their own disabilities, recognise strengths and needs, and develop confidence in decisions about their lives. Caregivers gain practical knowledge to support health, nutrition, therapy, care and development.\n\nFamilies, teachers, community and religious leaders all have a role in creating welcoming environments. EREEP encourages greater understanding, challenges misconceptions and fosters inclusive attitudes so persons with disabilities are recognised for their abilities and contributions.',
        },
        {
          title: 'Disability Rights Advocacy and Action',
          subtitle: 'Finding their voice and confidence to speak up',
          body: 'The project creates space for persons with disabilities to understand their rights, express their needs and take part in decisions affecting their lives. It encourages them to see themselves as people with choices, abilities and power to influence their families and communities.\n\nCaregivers are supported to advocate for their children, while schools, leaders and service providers are encouraged to uphold disability rights. EREEP seeks a culture where persons with disabilities and their families are heard, respected and empowered to speak for themselves.',
        },
        {
          title: 'Livelihoods and Economic Independence',
          subtitle: 'Creating opportunities to earn, save and grow',
          body: 'The project creates opportunities for persons with disabilities and caregivers to develop entrepreneurship and business skills, strengthen existing businesses or explore opportunities suited to their interests, abilities and circumstances.\n\nThrough SILC savings groups, members save together, access loans, invest in income-generating activities and support one another. Skills, saving and supportive groups help participants contribute to their households, make choices and build more secure futures.',
        },
      ],
    },
  ],
  advocacyTitle: 'Cross-cutting advocacy and partnerships',
  advocacyTagline: 'Turning voices into action.',
  advocacyBody: 'Change often begins with someone speaking up: a child saying something is not right, a young person asking for an opportunity, a caregiver raising a concern, or a community recognising an issue that can no longer be ignored. EREEP creates spaces where people can understand their rights, share experiences, raise concerns and speak about issues affecting their lives. Advocacy is not about speaking on behalf of communities; it is about helping people find the confidence, knowledge and platforms to speak for themselves.\n\nAcross its work, EREEP brings attention to human and child rights, gender equality, disability inclusion, environmental care, protection and access to opportunities and services.\n\nEREEP works with the Uasin Gishu County Government, civil society networks, schools, community-based organisations, community and religious leaders, service providers and other partners. These relationships connect community voices with institutions and resources, strengthen referrals and create opportunities for collective action.\n\nWhen people have the confidence to speak, the platforms to be heard and the right people at the table, voices can become action, and action can become lasting change.',
};

export async function getProjectsContent(): Promise<ProjectsContent> {
  return defaultProjectsContent;
}
