let inBrowser = false;

if (typeof window === "undefined") {
  inBrowser = false;
} else {
  inBrowser = true;
}

const userInfo = {
  fullName: "Isha Adhikary",
  address: "New Baneshwor",
  education: [
    { schoolName: "Kathmandu University", startDate: "2018" },
    { schoolName: "Uniglobe Secondary School", startDate: "2016" },
    { schoolName: "Rosebud School", startDate: "2004" },
  ],
};

for (let i = 0; i < userInfo.education.length; i++) {
  schoolInformation = userInfo.education[i];
  console.log(
    `Name: ${schoolInformation.schoolName}, Date: ${schoolInformation.startDate}`
  );
  if (inBrowser) {
    document.write("<br>");
    document.write(
      `Name: ${schoolInformation.schoolName}, Date: ${schoolInformation.startDate}`
    );
  }
}
