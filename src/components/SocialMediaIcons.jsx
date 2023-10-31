const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/andres-salcedo/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.kaggle.com/afsalcedo"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="kaggle-link" src="../assets/kaggle.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/afsalcedo"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
