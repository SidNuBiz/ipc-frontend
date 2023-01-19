import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';



const FaqAccordion = ({ data }) => {
    return (
        <div className="lg:text-2xl md:text-2xl sm:text-xl">
            <Accordion atomic={false}>
                {data.map((item, index) => (
                    <AccordionItem title={item.ques} key={index} className="mr-20">
                        <ul className='p-5 list-disc h-auto lg:text-lg md:text-lg sm:text-sm border-b-2'>
                            {item.ans.map((ans, index) => (
                                <li key={index} className="ml-5 mb-5">{ans}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqAccordion;
