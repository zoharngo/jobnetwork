const jobs = [
  {
    jobId: 1,
    title: "Senior Fire Alarm Technician",
    companyName: "LogOn",
    jobLocation: "SanPetsborg, WA (21019)",
    jobTitleId: 11,
    updatedAt: "22 DAYS AGO",
    discirption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
  },
  {
    jobId: 2,
    title: "High talanted Computer Technician",
    companyName: "Poineer",
    jobLocation: "Bni Brak, IL (322)",
    jobTitleId: 12,
    updatedAt: "1 Hour AGO",
    discirption: "consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
  },
  {
    jobId: 3,
    title: "Superb Computer Technician",
    companyName: "MU Labs",
    jobLocation: "Nes Ziona, LE (1121)",
    jobTitleId: 12,
    updatedAt: "1 Hour AGO",
    discirption: "consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
  },
  {
    jobId: 4,
    title: "Pizza delivery Driver",
    companyName: "Google",
    jobLocation: "Denamark, VA (121)",
    jobTitleId: 7,
    updatedAt: "2 Hours AGO",
    discirption: "he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica"
  },
  {
    jobId: 5,
    title: "Senoir delivery Track Driver",
    companyName: "Dmoinos",
    jobLocation: "RamatGan, B (34R2)",
    jobTitleId: 3,
    updatedAt: "4 Hours AGO",
    discirption: "he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica"
  },
  {
    jobId: 6,
    title: "Expirance track Driver",
    companyName: "Orbotech",
    jobLocation: "Russia, SP (34R2)",
    jobTitleId: 3,
    updatedAt: "23 DAYS AGO",
    discirption: "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved"
  },
  {
    jobId: 7,
    title: "Junior Programmer",
    companyName: "LogOn",
    jobLocation: "Berlin, GA (21019)",
    jobTitleId: 11,
    updatedAt: "5 DAYS AGO",
    discirption: "reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
  },
  {
    jobId: 8,
    title: "Senior Programmer",
    companyName: "Microsoft",
    jobLocation: "Haifa, IL (452)",
    jobTitleId: 11,
    updatedAt: "1 DAYS AGO",
    discirption: "middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 20"
  },
  {
    jobId: 9,
    title: "Senior Personal Assitanant",
    companyName: "Intel",
    jobLocation: "NY, WA (21019)",
    jobTitleId: 8,
    updatedAt: "3 DAYS AGO",
    discirption: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
  },
  {
    jobId: 10,
    title: "Capital Logen For Personal Assitanant",
    companyName: "Amdocs",
    jobLocation: "Israel, TA (703332)",
    jobTitleId: 8,
    updatedAt: "14 DAYS AGO",
    discirption: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
];

const jobsTitle = [
  { JobTitleId: 8, JobTitleText: "Personal Assitanant" },
  { JobTitleId: 11, JobTitleText: "Programmer" },
  { JobTitleId: 3, JobTitleText: "Driver Track" },
  { JobTitleId: 7, JobTitleText: "Delivery Driver" },
  { JobTitleId: 11, JobTitleText: "Fire Alarm Technician" },
  { JobTitleId: 12, JobTitleText: "Computer Technician" }
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  jobsTitle,
  jobs,
};
