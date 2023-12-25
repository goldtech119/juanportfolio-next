import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className="fony-bold flex flex-1 flex-col gap-6 pt-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hi
        <span className="not-italic"> 👋 </span>
        I'am <span className="text-primary"> Juan Sanchez</span>,{' '}
      </Heading3>
      <article className="relative space-y-5 before:block before:-translate-x-8 before:font-mono before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>'] after:block after:-translate-x-10 after:font-mono after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        <p>
        Expert Full Stack Developer with years of experience in React.js, Node.js, CMS, WordPress, Python and AWS.
        </p>
        <p><strong>
        "The only way to do great work is to love what you do."
        </strong>
        </p>
        <p>
        I love this quote from Steve Jobs as it has always resonated with me. I strongly believe that when you are passionate about your
        work, you are more likely to put in the time and effort required to do great work successfully.
        </p>
        <p>
        Regarding the React, Next.js, and Gatsby, proficient in developing RESTful APIs, utilizing Redux.js for state management, and
        implementing responsive design principles using CSS frameworks such as Bootstrap and Material-UI.
        </p>
        <p>
          Senior WordPress and CMS Expert with a focus on building beautiful and responsive
          web applications. My tech stack includes page builder such as an Elementor, Divi, Thrive, and WooCommerce, Theme Customize, TailwindCSS,
          and Sass, and I'm always eager to learn and expand my skills.
        </p>
        <p>
        Using Python, I implemented advanced machine learning algorithms and libraries such as NumPy, Pandas, and Scikit-learn to process and analyze the stock market data.
        Additionally, I created interactive data visualizations using Matplotlib and Seaborn to present the forecasted trends to stakeholders.
        Throughout python development, I've optimized the code for performance and scalability, resulting in a reliable and efficient predictive model.
        </p>
      </article>
    </div>
  );
};
export default InfoSection;
