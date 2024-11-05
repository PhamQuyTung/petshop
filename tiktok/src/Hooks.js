import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";

/*
    Đề bài:
    Tạo một ứng dụng React đơn giản để hiển thị thông tin về một người dùng từ API và 
    cập nhật tiêu đề trang khi thông tin người dùng được tải về thành công. Cụ thể:
        Set title: Cập nhật tiêu đề của trang thành tên người dùng sau khi API gọi thành công.
        Call API: Sử dụng useEffect để gọi một API lấy thông tin người dùng và hiển thị các thông tin này.
    Hướng dẫn:
        API bạn có thể sử dụng: https://jsonplaceholder.typicode.com/users/1
        Khi thông tin người dùng được tải về thành công, bạn sẽ thay đổi tiêu đề của trang thành tên của người dùng (document.title).
        Nếu gọi API thất bại, bạn có thể hiển thị thông báo lỗi và giữ tiêu đề mặc định.
*/

//Set title
// function Hooks() {
//     const [title, setTitle] = useState('');

//     useEffect(() =>{
//         document.title = title;
//     })

//     return (
//         <div>
//             {/* Set title */}
//             <input value={title} onChange={e => setTitle(e.target.value)}/>

//             {/*Call API*/}
//             <h1>User Information</h1>
//         </div>
//     )
// }

//Call API
// function Hooks() {
//     // const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'] 
//     const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);
//     //Set type button
//     const [typeButton, setTypeButton] = useState('posts');

//     //Call API post
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${typeButton}`)
//             .then(response => response.json())
//             .then(posts => {
//                 setPosts(posts)
//             });    
//     }, [typeButton]);


//     return (
//         <div>
//             {tabs.map(tab =>
//                 <button 
//                     style={typeButton === tab ? {
//                         backgroundColor: 'black',
//                         color: 'white',
//                         // border: 'none',
//                         // padding: '10px 20px',
//                         cursor: 'pointer'
//                     } : {}} 
//                     onClick={() => setTypeButton(tab)} 
//                     key={tab}
//                 >
//                     {tab}
//                 </button>
//             )}

//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />

//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// function Hooks() {
//     // Khai báo state để lưu trữ thông tin người dùng và trạng thái loading
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // useEffect để gọi API lấy thông tin người dùng
//     useEffect(() => {
//         // Gọi API từ URL cung cấp
//         fetch("https://jsonplaceholder.typicode.com/users/1")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setUser(data); // Lưu thông tin người dùng vào state
//                 setLoading(false); // Tắt trạng thái loading
//                 document.title = data.name; // Cập nhật title thành tên người dùng
//             })
//             .catch(error => {
//                 setError(error.message); // Lưu thông báo lỗi nếu có
//                 setLoading(false);
//             });
//     }, []); // [] đảm bảo API chỉ gọi một lần khi component được mount

//     // Render UI dựa trên trạng thái của loading và error
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             <h1>User Information</h1>
//             {user && (
//                 <div>
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Phone:</strong> {user.phone}</p>
//                     <p><strong>Website:</strong> {user.website}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// function Hooks() {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [userId, setUserId] = useState(1); // ID người dùng mặc định là 1

//     const fetchUser = (id) => {
//         setLoading(true);
//         setError(null);
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Không tìm thấy người dùng");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setUser(data);
//                 setLoading(false);
//                 document.title = data.name; // Cập nhật tiêu đề thành tên người dùng
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     };

//     // Gọi API khi component mount và khi userId thay đổi
//     useEffect(() => {
//         fetchUser(userId); // Gọi API với userId mặc đ��nh 1
//         const intervalId = setInterval(() => {
//             fetchUser(userId); // Gọi lại API mỗi 30 giây
//         }, 30000); // 30000 ms = 30 giây
    
//         // Dọn dẹp interval khi component unmount
//         return () => clearInterval(intervalId);
//     }, [userId]);

//     const handleSearch = () => {
//         const id = prompt("Nhập ID người dùng:");
//         setUserId(id);
//     };

//     return (
//         <div>
//             <button onClick={handleSearch}>Tìm kiếm người dùng</button>

//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}

//             {user && (
//                 <div>
//                     <h1>{user.name}</h1>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Phone:</strong> {user.phone}</p>
//                     <p><strong>Website:</strong> {user.website}</p>
//                 </div>
//             )}
//         </div>
//     );
// }



export default Hooks;
