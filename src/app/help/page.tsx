import Link from "next/link";

export const metadata = {
  title: "How GPA is calculated | UoM WAM to GPA",
  description:
    "How this tool converts University of Melbourne marks into a GPA estimate.",
};

const gradeScale = [
  { range: "80 – 100", grade: "H1", points: "4.0" },
  { range: "75 – 79", grade: "H2A", points: "3.7" },
  { range: "70 – 74", grade: "H2B", points: "3.3" },
  { range: "65 – 69", grade: "H3", points: "3.0" },
  { range: "50 – 64", grade: "P", points: "2.0" },
  { range: "0 – 49", grade: "N", points: "0.0" },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container max-w-3xl mx-auto p-6 my-6 bg-white rounded-lg shadow-sm">
        <Link href="/" className="text-sm text-sky-700 underline">
          ← Back to converter
        </Link>

        <h1 className="text-2xl font-bold mt-4 text-[#002c5c]">
          How GPA is calculated
        </h1>

        <p className="mt-4 text-gray-700">
          This converter gives an estimate of your GPA from your University of
          Melbourne marks. It is provided by LPDP Unimelb Association (LUnA) for
          informational use only and is not an official result.
        </p>

        <h2 className="text-lg font-semibold mt-8">Step 1: Convert each mark to a grade</h2>
        <p className="mt-2 text-gray-700">
          Each subject mark (0–100) is converted to a grade using the table below.
        </p>

        <h2 className="text-lg font-semibold mt-8">Step 2: Convert each grade to grade points</h2>
        <p className="mt-2 text-gray-700">
          Each grade is then given a grade point value on a 4.0 scale.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 text-left">
                <th className="p-2 border-b">Mark</th>
                <th className="p-2 border-b">Grade</th>
                <th className="p-2 border-b">Grade points</th>
              </tr>
            </thead>
            <tbody>
              {gradeScale.map((row) => (
                <tr key={row.grade} className="border-b">
                  <td className="p-2">{row.range}</td>
                  <td className="p-2 font-semibold">{row.grade}</td>
                  <td className="p-2">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold mt-8">Step 3: Calculate the weighted average</h2>
        <p className="mt-2 text-gray-700">
          For each subject, multiply its grade points by its credit. Add up all
          of these values across every term, then divide by the total credit.
        </p>
        <div className="mt-4 p-4 bg-gray-100 rounded-md font-mono text-sm">
          GPA = Σ (grade points × credit) ÷ Σ credit
        </div>

        <h2 className="text-lg font-semibold mt-8">Worked example</h2>
        <p className="mt-2 text-gray-700">
          Four subjects, each worth 12.5 credit:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 text-left">
                <th className="p-2 border-b">Mark</th>
                <th className="p-2 border-b">Grade</th>
                <th className="p-2 border-b">Points</th>
                <th className="p-2 border-b">Points × Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-2">77</td><td className="p-2">H2A</td><td className="p-2">3.7</td><td className="p-2">46.25</td></tr>
              <tr className="border-b"><td className="p-2">75</td><td className="p-2">H2A</td><td className="p-2">3.7</td><td className="p-2">46.25</td></tr>
              <tr className="border-b"><td className="p-2">65</td><td className="p-2">H3</td><td className="p-2">3.0</td><td className="p-2">37.50</td></tr>
              <tr className="border-b"><td className="p-2">63</td><td className="p-2">P</td><td className="p-2">2.0</td><td className="p-2">25.00</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-700">
          Total points × credit = 155. Total credit = 50. GPA = 155 ÷ 50 = <b>3.10</b>.
        </p>

        <h2 className="text-lg font-semibold mt-8">Notes</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-2">
          <li>Subjects without both a mark and a credit value are not included.</li>
          <li>All terms are combined into one overall GPA.</li>
          <li>The result is rounded to two decimal places.</li>
          <li>
            This is an estimate. For your official GPA and conversion rules, check
            your academic record and the University of Melbourne&apos;s official
            guidance.
          </li>
        </ul>
      </div>
    </main>
  );
}
