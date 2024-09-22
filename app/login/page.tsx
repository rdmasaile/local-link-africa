// "use client";

// import { useRouter } from "next/navigation";

// export default function Register() {
//     const router = useRouter();
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         router.push('/login');
//         console.log("Hello")
//       };

//     return (
//       <div style={styles.container}>
//         <h1 style={styles.heading}>LogIn</h1>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label htmlFor="name" style={styles.label}>Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="email" style={styles.label}>Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="password" style={styles.label}>Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               style={styles.input}
//             />
//           </div>

//           <button type="submit" style={styles.button}>Signin</button>
//         </form>
//       </div>
//     );
//   }

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#00000',
//     },
//     heading: {
//     //   marginBottom: '20px',
//     alignItems: 'left'
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       backgroundColor: '#000000',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//     },
//     formGroup: {
//       marginBottom: '15px',
//       width: '100%',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       textAlign: 'left',
//       width: '100%',
//     },
//     input: {
//       width: '120%',
//       padding: '10px',
//       borderRadius: '4px',
//       border: '1px solid #ccc',
//     },
//     button: {
//       align: 'center',
//       padding: '10px 20px',
//       backgroundColor: '#f7465',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//   };
