// 只做效果预览用
const CourseList = [
    {
        id: '1',           //课程编号
        name:'软件需求',      //课程名字
        teacher: '张三',  //授课教师
        key:'/study/allCourses/1',           //对应的path
        classification: '哲学', //课程所属专业
        general: '通识课',
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         //封面图片
        //详细信息
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        //课时安排
        schedule:'4课时每周',       
        //教学计划
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        //教材
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        //考核
        exam:'大作业60%，期末考试40%',
        //预修
        request:'软件工程基础',
    },
    {
        id: '2',          
        name:'软件测试',      
        teacher: '李四',  
        key:'/study/allCourses/2',
        classification: '哲学', 
        general: '专业课',  
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '3',          
        name:'软件管理',      
        teacher: '王五',  
        key:'/study/allCourses/3',  
        classification: '经济学', 
        general: '通识课', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '4',          
        name:'软件基础',      
        teacher: '钱六',  
        key:'/study/allCourses/4',
        classification: '经济学', 
        general: '通识课', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '5',          
        name:'软件基础',      
        teacher: '钱六',  
        key:'/study/allCourses/5', 
        classification: '经济学', 
        general: '专业课', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '6',          
        name:'软件管理',      
        teacher: '王五',  
        key:'/study/allCourses/6',
        classification: '经济学', 
        general: '1', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '7',          
        name:'软件基础',      
        teacher: '钱六',  
        key:'/study/allCourses/7',
        classification: '经济学', 
        general: '1', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },
    {
        id: '8',          
        name:'软件基础',      
        teacher: '钱六',  
        key:'/study/allCourses/8',
        classification: '经济学', 
        general: '1', 
        description:'课程内容介绍，课程大纲等。',
        cover:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',         
        introduce:'随着计算机技术应用的深入，人们需要收集和处理的信息急剧增大，通过软件收集和处理数据成为必然。然而，软件的开发和预期效果，没有达到人们对软件高质量的要求。软件需求工程指应用工程化的方法、技术和规格来开发和管理系统需求，充分理解客户要求。软件需求工程的目标就是获取高质量的软件需求。与传统需求分析概念相比，软件需求工程突出了工程化的原则，强调以系统化、条理化和可重用的方法和技术进行软件需求相关活动，从而有利于提高与软件需求相关的一切活动及其过程的管理，降低了软件需求开发和管理的难度和成本。',
        schedule:'4课时每周',
        plan:'1.软件及软件工程\n2.软件危机\n3.软件需求基础\n4.软件需求工程概念及过程\n5.软件需求工程师的知识和能力要求',
        material:'软件需求工程：理论与实践.北京：高等教育出版社，2019',
        exam:'大作业60%，期末考试40%',
        request:'软件工程基础',
    },

]
export default CourseList