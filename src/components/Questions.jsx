import { questions } from '@/assets'
import Heading from './sub/Heading'
import Question from './sub/Question'

const Questions = () => {
  return (
    <div className='py-20 px-52'>
        <Heading text={'Questions and Answers'} />
        <div className=''>
            <ul className='flex flex-col gap-y-2'>
                {questions.map((question,i) => (
                    <Question key={i} question={question} index={i} />
                ))}
                
            </ul>
        </div>
      
    </div>
  )
}

export default Questions
