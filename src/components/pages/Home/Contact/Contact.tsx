import { FC } from 'react';
import { Footer } from '.';
import useElementOnSecreen from '../../../../lib/hooks/useElementOnSecreen';
import AnimatedText from '../../../widget/AnimatedText';
import Heading2 from '../../../widget/Headings/Heading2';

const Contact: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen();
  return (
    <div
      ref={containerRef}
      id="contact"
      className={`mx-auto mt-10 min-h-[30rem] transition-transform duration-500 ease-linear lg:mt-[21rem] ${
        isVisible ? 'pt-0' : 'pt-36 opacity-0'
      }`}
    >
      <div className="flex items-center justify-center">
        <Heading2>
          {isVisible ? (
            <AnimatedText text="Connect with Me" setMinWidth={false} />
          ) : (
            ''
          )}
        </Heading2>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
