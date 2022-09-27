const questions = [
  "What I learned today",
  "What made me feel upsetting",
  "What I can do to improve?",
  "What made me feel happy?",
  "How many people I helped today?",
];

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " -->");
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

const report = [];
const resume = () => {
  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      report.push(questions[i] + " " + "-->" + " " + answers[j] + "\n");
    }
    return report;
  }
};

process.on("exit", () => {
  console.log(`Amazing, Grasi.

  This is your today's report:
   ${resume()}
    `);
});
