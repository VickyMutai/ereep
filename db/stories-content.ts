export type StorySection = { heading: string; body: string };
export type ImpactStoryPage = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  sections: StorySection[];
};

export type StoriesContent = {
  heroTitle: string;
  heroLead: string;
  stories: ImpactStoryPage[];
};

export const defaultStoriesContent: StoriesContent = {
  heroTitle: 'Every journey carries the possibility of change.',
  heroLead: 'Meet people whose determination, knowledge and opportunities are helping shape new futures across the Langas community.',
  stories: [
    {
      slug: 'kevin-finding-purpose',
      category: 'Children and Youth Project',
      title: 'Kevin’s Journey From a Lost Cause to Finding Purpose',
      summary: 'Kevin’s journey from a young man struggling with substance use to a youth leader, social worker and pastor.',
      image: '/images/projects/children-youth.jpg',
      imageAlt: 'Young community volunteers gathered outdoors',
      sections: [
        {
          heading: 'A Reason to Choose Differently',
          body: 'Growing up in Langas, Eldoret, Kevin knew what it meant to grow up with limited opportunities. His parents struggled to meet the needs of their family, and even staying in school sometimes depended on support from his uncle. Around him, drug and substance use were common among young people.\n\nAt 17, while in Form Two, Kevin began using bhang, miraa and alcohol, with “keg” eventually becoming his biggest struggle. His substance use affected his education and continued even after he completed high school and joined a local Eldoret Polytechnic to study mechanical engineering. Over time, people in the community began to see him as a lost cause.\n\nBut Kevin’s story was not going to end there.\n\nIn 2020, Kevin connected with young Christians from a local Youth Church. Through their friendship, support and mentorship, he began to reflect more deeply on the direction his life was taking. He came to recognise the impact substance use was having on his life and made the decision to stop.\n\nAt the same time, another realisation began to take shape. Although he was studying mechanical engineering, Kevin found himself drawn to helping other people. He began to see social work as something closer to his purpose, a path where he could support others and contribute to positive change. His journey with EREEP had actually begun several years earlier.',
        },
        {
          heading: 'From Playing with Children to Walking Alongside Them',
          body: 'Kevin first connected with EREEP in 2016 through his friend Richard. At first, he thought the organisation was mainly about playing with children. But his involvement in the Msingi Bora Children Learning Activities, then simply known as “Edmund Rice Camps”, gave him a very different understanding. He began to see the realities behind the children he met: families facing poverty, children with limited access to education and young people growing up without the mentorship and support they needed.\n\nKevin became more than a volunteer. He became a familiar and trusted person for children and young people in the community. He participated in EREEP camps and later became involved in EREEP’s secondary school mentorship, supporting students as they navigated personal growth, leadership and education. His consistency and commitment led to greater responsibility, and he eventually became the youth leader coordinating EREEP volunteers.\n\nIn that role, Kevin was not only organising activities. He was mentoring other young people, encouraging them to serve others, work as a team and recognise that they too could make a difference in their community.',
        },
        {
          heading: 'An Opportunity That Changed His Direction',
          body: 'In 2021, his growing leadership and commitment to community service led EREEP to engage him as a part-time Community Coordinator, where he helped coordinate community activities and strengthen engagement with children, young people and other community members. Later in the year, another opportunity came unexpectedly. EREEP’s Program Manager invited Kevin to attend a training on her behalf, organised by a local partner in collaboration with a facilitator from Belgium. The training introduced participants to mobile schools designed to bring education closer to children living and working on the streets. Kevin’s commitment during the training stood out and, following his continued volunteering, he was invited for an interview and offered a probationary opportunity as a social worker.\n\nBy 2022, Kevin had secured full-time employment with the partner. The young man who had once been viewed by some as a lost cause was now using his own experiences, skills and growing sense of purpose to support others.',
        },
        {
          heading: 'Choosing the Future He Wanted',
          body: 'Kevin did not stop there. In 2024, after gaining experience through his work and becoming increasingly passionate about supporting others, he enrolled at a local college to pursue a Diploma in Social Work. He was determined to strengthen his professional skills and turn his passion for helping others into a career through which he could create meaningful change and empower others.\n\nHis transformation has also extended beyond his professional journey. After becoming involved with the Youth Church in 2020 and quitting substance use, Kevin continued to grow through faith, personal change and community service. His commitment saw him progress from shepherd to elder, before being ordained as a pastor in 2025.\n\nToday, Kevin’s story is a reminder that a person’s circumstances do not have to define their future. Sometimes, what changes a life is having someone believe in you, finding a space where you can contribute, and discovering that your own experiences can become a source of purpose.\n\nKevin was once seen as a lost cause. Today, he is a social worker, youth leader and pastor, using his voice, experience and skills to help others find their own path forward.',
        },
      ],
    },
    {
      slug: 'clemencia-caregiver-to-entrepreneur',
      category: 'Breaking Disability Barriers Project',
      title: 'Clemencia’s Journey From PWD Caregiver to Entrepreneur',
      summary: 'Turning determination into opportunity while advocating for her child and creating new possibilities for her family.',
      image: '/images/projects/disability.jpg',
      imageAlt: 'Woman working at a small community market',
      sections: [
        {
          heading: 'Turning Determination Into Opportunity',
          body: 'At 49, Clemencia knows what it means to keep going when circumstances make the journey difficult. A mother of five living in Langas with her husband, Clemencia is the primary caregiver of her youngest child, who was born with a physical disability affecting the left arm and left foot.\n\nFor many years, Clemencia worked hard to support her family. From 2011 to 2022, she worked as a house help, helping provide an important source of income for the household. But the demanding work eventually took a toll on her health, and a chronic back condition forced her to stop.\n\nLosing her income made an already challenging situation even harder. Her fourth-born child completed secondary school in 2024 with excellent grades but could not proceed to college because the family could not afford the fees. At the same time, Clemencia was managing constant back pain, caring for her youngest child and carrying the responsibilities of her household.',
        },
        {
          heading: 'Finding a New Path',
          body: 'In 2023, Clemencia was introduced to EREEP by another beneficiary from the community. Joining EREEP activities was not always easy, as the disability project had not yet been rolled out. Despite her health challenges and limited resources, she remained determined to attend other caregivers’ child-rights empowerment training. She would often walk to the training venue and, when the pain became too severe, use the little money she had to take a motorcycle, or “boda”.\n\nFor Clemencia, the knowledge gained from EREEP and her experience with other caregivers opened up new ways of thinking about both her child’s future and her own.\n\nWith the introduction of the Disability Project in 2025, she gained a deeper understanding of the rights of children with disabilities and became more confident in advocating for her child’s access to education, healthcare and protection. She also learned practical ways to provide balanced nutrition using affordable, locally available foods.',
        },
        {
          heading: 'From Saving to Starting a Business',
          body: 'In 2025, Clemencia received entrepreneurship training that became an important foundation for her next steps. She gained practical knowledge on identifying business opportunities, managing a small business and making responsible financial decisions, giving her greater confidence to explore new ways of earning an income.\n\nJust as importantly, Clemencia began to see that earning a living did not necessarily mean returning to the demanding casual work she had been forced to leave. Entrepreneurship and financial management opened up new possibilities for earning, saving and making better use of the resources available to her.\n\nAt the beginning of 2026, Clemencia joined a Savings and Internal Lending Community (SILC) group established by EREEP, which became an important part of this journey. After joining the group, she began saving consistently and, over time, built enough savings to qualify for a SILC loan. She used the loan to start a charcoal business, creating an income source that allows her to remain close to home while continuing to care for her family.\n\nFor Clemencia, the business represents more than a source of income. It is an opportunity to regain some of the financial independence she lost when ill health forced her to stop working, while continuing to be present for her child and family. Her journey shows what can happen when opportunity meets determination.\n\nClemencia is not simply a caregiver receiving support. She is building a livelihood, advocating for her child and creating new possibilities for her family.',
        },
      ],
    },
    {
      slug: 'keeping-girls-in-school',
      category: 'Wezesha Dada Girls Empowerment Project',
      title: 'Restoring Dignity, Keeping Girls in School',
      summary: 'The impact of sustainable menstrual health support in Langas.',
      image: '/images/projects/wezesha-dada.jpg',
      imageAlt: 'Students learning together in a classroom',
      sections: [
        {
          heading: 'When Menstruation Becomes a Barrier to Learning in Langas',
          body: 'Every month, millions of girls around the world experience menstruation. Yet for girls growing up in poverty, something as ordinary as having a period can become a barrier to dignity, education and participation.\n\nIn Kenya, menstrual health is closely connected to the realities girls face at home and at school. While 97% of women aged 15–49 reported using appropriate menstrual materials during their most recent period, access and affordability are not experienced equally by all girls. UNICEF Kenya also reports that only half of rural schools have basic sanitation facilities, making it harder for girls to manage menstruation safely and comfortably while at school. For families living with financial hardship, the recurring cost of menstrual products can make this challenge even more difficult.\n\nIn Langas, these realities can be seen in the everyday experiences of girls. For some girls, the start of a menstrual period could also mean the end of a school day. A period might begin unexpectedly while a girl was in class, leaving her worried about staining her uniform and embarrassed about being seen by her classmates. If she did not have a sanitary pad and her family could not afford one, she might ask permission to go home. Some girls stayed away from school during their periods, while others tried to manage with whatever materials were available, knowing they could leak, cause discomfort or soil their uniforms.\n\nWhat should have been an ordinary part of growing up was becoming a reason to miss school.\n\nFor families already struggling to meet food, school and other household needs, sanitary products could be another recurring expense that was difficult to sustain. Each month brought the same challenge of finding safe and appropriate menstrual products.\n\nThe impact reached beyond the classroom. Missing school meant missing lessons, while the fear of leakage, embarrassment and stigma could affect girls’ confidence and participation. Teachers in partner schools often found themselves providing emergency sanitary pads or allowing girls to return home when their periods began unexpectedly.\n\nFor some girls, menstrual poverty also created wider protection concerns. When girls have to depend on others for money or sanitary products, particularly in households facing severe financial hardship, that dependence can increase their vulnerability to exploitation or transactional relationships. Addressing menstrual poverty was therefore about more than keeping girls in school. It was also about protecting their dignity, confidence and ability to manage their periods safely and independently.\n\nAt the same time, myths, stigma and limited knowledge about menstruation and sexual and reproductive health could make it difficult for girls to understand the changes happening to their bodies, ask questions or seek appropriate support.',
        },
        {
          heading: 'Knowledge, Dignity, Confidence and Practical Support',
          body: 'Wezesha Dada brought together practical menstrual health support and knowledge. Girls received reusable sanitary pads alongside Sexual and Reproductive Health, Rights and Responsibility (SRHRR) education, creating space for them to understand their bodies, ask questions and speak more openly about issues often surrounded by silence and embarrassment.\n\nThe reusable pads provide a longer-term solution to challenges girls face every month. With proper care, the pads can last for up to two years, meaning that a girl can have reliable menstrual protection for most of her three years in secondary school without having to worry about finding money for sanitary products every month. This gives girls greater security and allows them to focus more consistently on their education rather than worrying about whether they will have what they need when their next period comes.\n\nThe support also brings relief to families. Instead of repeatedly purchasing disposable sanitary products, families can reduce the financial pressure associated with menstrual care and redirect limited household resources towards other needs. For girls, having their own reliable menstrual protection also reduces dependence on others and gives them greater confidence to manage their periods safely and privately.\n\nThe environmental benefit is equally important. Unlike disposable pads, which are used once and then discarded, reusable pads can be washed and used repeatedly over a long period. This reduces the amount of menstrual waste generated and contributes to a cleaner and more sustainable environment.',
        },
        {
          heading: 'Fewer Days Lost From School',
          body: 'The difference has been significant. Menstrual-related absenteeism among girls reached through the project declined from 18% to 2%.\n\nFor girls, this means fewer days lost from school, greater confidence in managing menstruation and fewer occasions when their periods stand between them and their education. It means being able to face each month knowing they have what they need, and being able to remain in class, participate and look ahead to their future with greater confidence.\n\nA period should never determine whether a girl gets to learn, participate and pursue her future. With the right support, girls can manage menstruation with dignity, protect their wellbeing and remain fully part of school life.',
        },
      ],
    },
  ],
};

export async function getStoriesContent(): Promise<StoriesContent> {
  return defaultStoriesContent;
}

export async function getStoryBySlug(slug: string) {
  const content = await getStoriesContent();
  return content.stories.find((story) => story.slug === slug);
}
