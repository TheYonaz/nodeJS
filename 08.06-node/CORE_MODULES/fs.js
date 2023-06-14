const FS = require("fs");
// FS.mkdir('./test',{recursive:true},(err,path)=>{
//     if(err) return console.log(err.message);
// console.log(`folder made in ${path}`);
// })

// FS.rmdir(`${__dirname}/test`,error =>{
//     if(error) return console.log(error.message);
//     console.log("directory deleted!");
// })

// const date = new Date();
// const TodayDate = `${date.getFullYear()}-${
//   date.getMonth() + 1
// }-${date.getDate()}`;
// const TimeNow = date.toLocaleTimeString();

// FS.mkdir("./logs", { recursive: true }, (err, path) => {
//   if (err) console.log(err.message);
//   FS.writeFile(
//     `${__dirname}/logs/${TodayDate}.log`,
//     `error message -${TimeNow} `,
//     (error) => {
//       if (error) return console.log(error.message);
//     }
//   );
// });
// FS.unlink(`${__dirname}/test/test.html`, error => {
//     if (error) return console.log(error.message);
//     console.log("Successfully removed the file!!!");
//   });
/********* existsSync **********/
// const isExists = FS.existsSync(`${__dirname}/test`);
// console.log(isExists);

/********* async **********/

// mkdir(`${__dirname}/test`)
//   .then(() => console.log("Made a new directory successfully!"))
//   .catch(error => console.log(error.message));

// const makeFolderAndFile = async () => {
//   try {
//     const isExists = FS.existsSync(`${__dirname}/test`);
//     if (!isExists) await mkdir(`${__dirname}/test`);
//     await writeFile(`${__dirname}/test/testing.txt`, "yes!!!!!");
//     console.log("successfully created a file!!!");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// makeFolderAndFile();

///******delete exercise******/
const { mkdir, writeFile, readdir, rmdir, unlink } = require("fs/promises");
const path = require("path");

const users = [
  { name: "yononb", last: "vannuc" },
  { name: "david", last: "king" },
  { name: "tasd", last: "asdaf" },
];

const API_URL = `${__dirname}/users`;

const removeFilesAndFolder = async () => {
  try {
    const userFiles = await readdir(`${__dirname}/users`); // מערך רק במקרה ואין קבצים ומערך עם שמות הקבצים במידה ויש בנתיב
    const regexTXT = /.+\.txt$/;
    if (userFiles.length) {
      // עושה בדיקה אם יש אורך למערך כי אם לא אני לא רוצה לנסות למחוק קובץ שלא קיים
      for (const file of userFiles) {
        if (path.extname(file) === ".txt") {
          await unlink(`${API_URL}/${file}`);
        }
        if (path.extname(file) !== ".txt") {
          console.log(`its ${regexTXT.test(file)}`);
        }
      }
    }
    await rmdir(API_URL); // עכשיו אני מוגן מכך שלא אנסה למחוק תיקייה שיש בתוכה קבצים
    console.log("Files and folder removed successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

const makeAndRemoveFilesAndFolder = async () => {
  try {
    const isExist = FS.existsSync(`${__dirname}/users`);
    if (isExist) await removeFilesAndFolder();

    await mkdir(API_URL);

    for (const user of users) {
      if (user.name === "david") {
        await writeFile(
          `${API_URL}/${user.name}-${user.last}.pdf`,
          `${user.name} ${user.last}`
        ); 
      }
      await writeFile(
        `${API_URL}/${user.name}-${user.last}.txt                 `,
        `${user.name} ${user.last}`
      );
    }
    console.log("made files and folder!");
  } catch (error) {
    console.log(error.message);
  }
};

makeAndRemoveFilesAndFolder();

setTimeout(() => removeFilesAndFolder(), 5000);
