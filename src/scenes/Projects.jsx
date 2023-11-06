import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{subtitle}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Explore my projects to witness the application of my skills to complex
          problems. Each one demonstrates innovative use of technologies to
          deliver valuable insights.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            INNOVATIVE DATA SOLUTIONS
          </div>
          <Project
            title="English Premier League Table Prediction"
            subtitle="A predictive model using Machine Learning and Python to forecast the outcome of the English Premier League."
            link="https://github.com/afsalcedo/Premier-League-Table-Prediction"
          />
          <Project
            title="Email Classification"
            subtitle="A classification model developed in Python to identify spam and legitimate emails using Machine Learning and Natural Language Processing."
            link="https://www.kaggle.com/code/afsalcedo/email-classification"
          />

          {/* ROW 2 */}
          <Project
            title="HR Analytics Dashboard"
            subtitle="A Power BI dashboard visualizing HR data to get insights into employee office presence and work-from-home likelihood."
            link="https://github.com/afsalcedo/HR-Data-Analysis-Power-BI-Dashboard"
          />
          <Project
            title="Planar Data Classification"
            subtitle="A Neural Network model for accurate planar data classification."
            link="https://github.com/afsalcedo/Planar-Data-Classification"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            FUELING DATA-DRIVEN EVOLUTION FOR TANGIBLE OUTCOMES.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
