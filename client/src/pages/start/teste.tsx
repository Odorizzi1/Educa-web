
// async function generateQuestion(topic: string): Promise<any> {
//     const response = await fetch('http://127.0.0.1:5000/generate-question', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ topic }),
//     });
  
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
  
//     const data = await response.json();
//     return data;
//   }
  

//   const [question, setQuestion] = useState('');
  
//   useEffect(() => {
//     const fetchQuestion = async () => {
//       try {
//         const response = await generateQuestion(topic);
//         console.log(response, "response")
//       } catch (error) {
//         console.error('Error generating question:', error);
//       }
//     };
  
//     fetchQuestion();
//   }, [topic]);