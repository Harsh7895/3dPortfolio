import {styles} from '../style'
import {motion} from 'framer-motion'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import {textVariant} from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'


const ExperienceCard = ({experience}) =>(
  <VerticalTimelineElement
  contentStyle={{background:"#1d1836" , color:"#fff"}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className=' flex justify-center items-center h-full w-full'>
      <img src={experience.icon} alt={experience.company_name}
      className='w-[60%] h-[60%] object-container'  />
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p>{experience.points}</p>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>What I can do.</p>
      <h2 className={styles.sectionHeadText}>Services</h2>
    </motion.div>

    <div className='mt-14 flex flex-col '>
      <VerticalTimeline>
        {
          experiences.map((experience , index)=>(
            <ExperienceCard experience={experience} key={index}/>
          ))
        }
      </VerticalTimeline>
    </div>
    
    </>
  )
}

export default SectionWrapper(Experience , "work")