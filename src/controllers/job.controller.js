export const fetchJobs = async (req, res) => {
  try {
    const { skills, filters } = req.body;

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
      return res.status(400).json({ error: "Skills are required as an array" });
    }

    const response = await fetch("https://remoteok.com/api");
    const data = await response.json();

    const jobs = data.slice(1);

    if (!filters || filters.length === 0) {
      const topJobs = jobs.slice(0, 3);
      return res.status(200).json({ count: topJobs.length, jobs: topJobs });
    }

    // const matchedJobs = jobs.filter((job) => {
    //   const tags = job.tags?.map((tag) => tag.toLowerCase()) || [];
    //   return skills.some((skill) => tags.includes(skill.toLowerCase()));
    // });

    res.status(200).json({ count: matchedJobs.length, jobs: matchedJobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export const demandingSkills = async (req, res) => {
  try {
    const response = await fetch("https://remoteok.com/api");
    const data = await response.json();

    const skillFrequency = {};
    const jobs = data.slice(1);

    jobs.forEach((job) => {
      job.tags.forEach((tag) => {
        skillFrequency[tag] = (skillFrequency[tag] || 0) + 1;
      });
    });

    const topSkills = Object.entries(skillFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    res.status(200).json({ topSkills });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};
