import userModal from "../models/user.model.js";



export const registerUser = async (req,res)=>{
    try {
        const {name,email,password,skills,description,isAvailableForJob,location,resumeLink,socialLinks} = req.body;

        if(!name || !email || !description){
            return res.status(400).json({error:"Missing fields"});
        }

        const User = await userModal.create({name,email,password,skills,description,isAvailableForJob,location,resumeLink,socialLinks});

        return res.status(201).json({data:User});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Server error"});
    }
}

export const loginUser = async (req,res)=>{ 
    try {
        const {email,password} = req.body;

        const user = await userModal.find({email});

        if(!user){
            return res.status(400).json({error:"Invalid user"});
        }
        if(user[0].password === password){
             return res.status(200).json({user,message:"Login successfull."});
        }
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Server error"});
    }
}


export const updateUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      skills,
      description,
      isAvailableForJob,
      location,
      resumeLink,
      socialLinks,
    } = req.body;

    const { id } = req.params;

    const updatedUser = await userModal.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
        skills,
        description,
        isAvailableForJob,
        location,
        resumeLink,
        socialLinks,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    console.log("Update error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
