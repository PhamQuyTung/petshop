import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useLayoutEffect, useRef, memo } from "react";

// 1. useEffect(callback) 
// - Gọi callback mỗi khi component render
// - Gọi callback sau khi componen thêm element vào DOM
// - Ít dùng

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// ----------------------------------------------------------------
// 1. Callback luôn được gọi sau khi component mounted

/*
    1. Update DOM
        - F8 blog title
    2. Call API
    3. Listen DOM events
        - Scroll
        - Resize
    4. Cleanup
        - Remove listener / Unsubcribe
        - Clear timer
*/

//Set title
// TH1: useEffect(callback) 
// function Content() {
//     const [title, setTitle] = useState('');

//     useEffect(() => {
//         document.title = title;    
//     });

//     return (
//         <div style={{padding: 50, textAlign: "center"}}>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     );
// };

//Call API
// TH2: useEffect(callback, []) 
// function Content() {
//     const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);

//     //Call API post
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(posts => {
//                 setPosts(posts)
//             });    
//     }, []);


//     return (
//         <div style={{padding: 50, textAlign: "center"}}>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// TH3: useEffect(callback, [deps]) 

// Mảng các button 
// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'] 

// // useEffect(callback, [deps])
// function Content() {
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

// ----------------------------------------------------------------
// const Content = () => {
//     const [activeTab, setActiveTab] = useState('Posts'); // Tab đang hoạt động
//     const [data, setData] = useState([]); // Dữ liệu sẽ hiển thị
//     const [loading, setLoading] = useState(true); // Trạng thái loading

//     // useEffect để lấy dữ liệu mỗi khi activeTab thay đổi
//     useEffect(() => {
//         setLoading(true); // Bắt đầu trạng thái loading mỗi khi tab thay đổi

//         // Hàm giả lập gọi API dựa trên tab hiện tại
//         const fetchData = async () => {
//             let url = '';

//             // Xác định URL dựa trên tab hiện tại
//             if (activeTab === 'Posts') {
//                 url = 'https://jsonplaceholder.typicode.com/posts';
//             } else if (activeTab === 'Comments') {
//                 url = 'https://jsonplaceholder.typicode.com/comments';
//             } else if (activeTab === 'Albums') {
//                 url = 'https://jsonplaceholder.typicode.com/albums';
//             }

//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();
//                 setData(result.slice(0, 10)); // Lấy 10 phần tử đầu tiên từ API
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false); // Kết thúc trạng thái loading
//             }
//         };

//         fetchData(); // Gọi hàm fetchData khi component mount hoặc khi activeTab thay đổi

//         // Cleanup không cần thiết ở đây vì không có sự kiện cần dọn dẹp
//     }, [activeTab]); // useEffect sẽ chạy lại mỗi khi activeTab thay đổi

//     return (
//         <div>
//             {/* Tabs */}
//             <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//             <button onClick={() => setActiveTab('Posts')} disabled={activeTab === 'Posts'}>Posts</button>
//             <button onClick={() => setActiveTab('Comments')} disabled={activeTab === 'Comments'}>Comments</button>
//             <button onClick={() => setActiveTab('Albums')} disabled={activeTab === 'Albums'}>Albums</button>
//             </div>

//             {/* Nội dung của tab */}
//             <div>
//                 <h2>{activeTab}</h2>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <ul>
//                     {data.map(item => (
//                         <li key={item.id}>
//                             {activeTab === 'Posts' && item.title}
//                             {activeTab === 'Comments' && item.body}
//                             {activeTab === 'Albums' && item.title}
//                         </li>
//                     ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

//Bai tap su dung useEffect
/*

    Bai 1: Dưới đây là một bài tập đơn giản sử dụng useEffect cho người mới học. 
    Bài tập này sẽ giúp bạn hiểu cách useEffect hoạt động cơ bản bằng cách cập nhật tiêu đề trang dựa trên số lần nhấp vào một nút.

    Mục tiêu:
        Khi người dùng bấm vào nút, số lần nhấp sẽ được tăng lên.
        Tiêu đề của trang sẽ tự động cập nhật để hiển thị số lần nhấp bằng cách sử dụng useEffect.

*/

// useState count
// function Content() {
//     const [count, setCount] = useState(0);

//     // Không sử dụng useEffect, title sẽ là giá trị trực tiếp của count
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>Click Me</button>
//         </div>
//     );
// }

/*

    Ưu điểm:
        Đơn giản hơn và không có sự dư thừa về trạng thái (không cần thêm một biến title).
        Hiệu suất tốt hơn một chút vì không có hook useEffect nào chạy sau mỗi lần count thay đổi.
        Không cần bộ nhớ bổ sung để lưu trữ giá trị của title, do h1 chỉ hiển thị trực tiếp giá trị của count.
    Nhược điểm:
        Hạn chế nếu sau này bạn muốn mở rộng logic để thay đổi title phức tạp hơn (không chỉ đơn giản là giá trị của count).

*/

// useEffect count
// function Content() {
//     const [count, setCount] = useState(0);
//     const [title, setTitle] = useState('');

//     // useEffect thay doi title khi count thay doi
//     useEffect(() => {
//         setTitle(`Click Count: ${count}`);
//     }, [count]);

//     return (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={() => setCount(count + 1)}>Click Me</button>
//         </div>
//     );
// }

/*

    Ưu điểm:
        Linh hoạt hơn, dễ dàng mở rộng nếu sau này bạn cần thay đổi tiêu đề phức tạp hơn dựa trên các điều kiện khác.
        useEffect giúp dễ dàng tách biệt logic thay đổi tiêu đề ra khỏi logic khác.
    Nhược điểm:
        Phải tạo thêm một trạng thái (title), sử dụng thêm bộ nhớ.
        useEffect chạy mỗi khi count thay đổi, gây ra hiệu năng giảm nhẹ so với giải pháp trực tiếp.

*/
/*
    So sánh về tốc độ và tối ưu:
        Đoạn code không sử dụng useEffect sẽ nhanh hơn và tối ưu hơn nếu bạn chỉ cần hiển thị giá trị của count mà không có logic nào khác.
        Đoạn code sử dụng useEffect sẽ linh hoạt hơn, nhưng có thêm một chút chi phí về hiệu suất và phức tạp không cần thiết nếu bạn chỉ đơn thuần muốn hiển thị count.
*/

// useEffect listent DOM event 
// Up to top 
// Mảng các button 
// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'] 

// // useEffect(callback, [deps])
// function Content() {
//     // const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);
//     //Set type button
//     const [typeButton, setTypeButton] = useState('posts');
//     //Set show hide
//     const [show, setShow] = useState(false);

//     //Call API post
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${typeButton}`)
//             .then(response => response.json())
//             .then(posts => {
//                 setPosts(posts)
//             });    
//     }, [typeButton]);

//     //Listen DOM events up to top
//     const handScroll = () => {
//         if (window.scrollY >= 200) {
//             setShow(true)
//         } else {
//             setShow(false)
//         }
        
//     }   

//     useEffect(() => {
//         window.addEventListener('scroll', handScroll);

//         return () => {
//             window.removeEventListener('scroll', handScroll);
//         }
//     }, [])

//     //render JSX
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

//             {/* <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             /> */}

//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>

//             {show && (
//                 <div style={{
//                     position: 'fixed',
//                     bottom: 20,
//                     right: 20,
//                     backgroundColor: 'rgba(0,0,0,0.8)',
//                     padding: '10px',
//                     color: 'white',
//                     cursor: 'pointer'
//                 }}

//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                
//                 >
//                     Scroll to top
//                 </div>
//             )}
//         </div>
//     );
// };


// useEffect with DOM events
// function Content() {
//   // State để lưu kích thước chiều rộng của cửa sổ
//   const [chieuRongCuaSo, setChieuRongCuaSo] = useState(window.innerWidth);

//   /** 
//    * Effect này sẽ thêm một event listener để theo dõi khi kích thước cửa sổ thay đổi
//    * và sẽ loại bỏ listener này khi component bị unmount (dọn dẹp).
//    */
//   useEffect(() => {
//     // Hàm cập nhật chiều rộng cửa sổ
//     const capNhatChieuRong = () => {
//       setChieuRongCuaSo(window.innerWidth);
//     };

//     // Thêm event listener khi component được mount
//     window.addEventListener("resize", capNhatChieuRong);

//     // Cleanup: Loại bỏ event listener khi component bị unmount
//     return () => {
//       window.removeEventListener("resize", capNhatChieuRong);
//     };
//   }, []); // Chỉ chạy effect này khi component mount (mảng phụ thuộc rỗng)

//   return (
//     <div>
//       <h1>Chiều rộng cửa sổ: {chieuRongCuaSo}px</h1>
//     </div>
//   );
// }
/*
    Giải thích chi tiết:
        State (chieuRongCuaSo):
            Biến state này lưu chiều rộng của cửa sổ và được khởi tạo với giá trị window.innerWidth, là chiều rộng hiện tại của cửa sổ.

        useEffect:
            Khi component được render lần đầu tiên, React sẽ chạy đoạn code bên trong useEffect.
            Hàm capNhatChieuRong được khai báo để cập nhật chieuRongCuaSo bất cứ khi nào kích thước của cửa sổ thay đổi.
            Sử dụng window.addEventListener("resize", capNhatChieuRong) để theo dõi sự kiện thay đổi kích thước cửa sổ.
            Khi component bị unmount, hàm cleanup sẽ được gọi để xóa event listener với window.removeEventListener("resize", capNhatChieuRong).

        Phụ thuộc mảng rỗng ([]):
            Mảng phụ thuộc rỗng đảm bảo rằng effect này chỉ được chạy một lần khi component được mount và được dọn dẹp khi unmount.

        Kết quả:
            Mỗi khi người dùng thay đổi kích thước cửa sổ, ứng dụng sẽ hiển thị chiều rộng mới của cửa sổ trong giao diện người dùng.
*/


// useEffect with timer functions
// Ví dụ: Sử dụng setInterval để cập nhật thời gian
// function Content() {
//     // State để lưu số giây
//     const [soGiay, setSoGiay] = useState(10);

//     /** 
//      * Effect này sẽ thiết lập một bộ hẹn giờ (setInterval)
//      * để cập nhật số giây mỗi giây một lần.
//      */
//     useEffect(() => {
//     // Thiết lập bộ đếm với setInterval
//     const intervalId = setInterval(() => {
//         setSoGiay((prevSoGiay) => prevSoGiay - 1);
//     }, 1000); // Mỗi giây sẽ trừ đi 1

//     // Cleanup: Xóa bộ hẹn giờ khi component bị unmount
//     return () => clearInterval(intervalId);
//     }, []); // Chỉ chạy một lần khi component được mount

//     return (
//     <div>
//         <h1>Đếm ngược: {soGiay} giây</h1>
//     </div>
//     );
// }
/* 
    Giải thích chi tiết:
        State (soGiay):
            Biến state này lưu số giây đang đếm ngược và được khởi tạo với giá trị 10.

        useEffect:
            Khi component được render lần đầu tiên, React sẽ chạy hàm useEffect.
            Bên trong effect, hàm setInterval được sử dụng để giảm số giây mỗi giây một lần.
            Cứ mỗi 1000ms (1 giây), giá trị của soGiay sẽ được trừ đi 1 thông qua callback setSoGiay((prevSoGiay) => prevSoGiay - 1).

        Cleanup với clearInterval:
            setInterval sẽ tiếp tục chạy trừ khi nó được dọn dẹp. Để tránh rò rỉ bộ nhớ, hàm clearInterval(intervalId) sẽ được gọi trong hàm cleanup của useEffect khi component bị unmount.
            
        Phụ thuộc mảng rỗng ([]):
            Điều này đảm bảo rằng effect chỉ chạy một lần khi component được mount, và bộ đếm sẽ không được thiết lập lại khi component re-render.
            
        Kết quả:
            Mỗi giây, số giây sẽ giảm đi 1 cho đến khi component được gỡ bỏ hoặc hết thời gian. Đây là cách tốt để sử dụng useEffect với các hàm hẹn giờ trong React.
*/


// Ví dụ: Sử dụng setTimeout để trì hoãn một hành động
// function Content() {
//     // State để lưu trạng thái hiển thị thông điệp
//     const [hienThi, setHienThi] = useState(false);

//     /** 
//      * Effect này sử dụng setTimeout để trì hoãn việc hiển thị thông điệp sau 5 giây.
//      */
//     useEffect(() => {
//     // Thiết lập setTimeout để hiển thị thông điệp sau 5 giây
//     const timerId = setTimeout(() => {
//         setHienThi(true);
//     }, 5000); // 5000ms = 5 giây

//     // Cleanup: Xóa bộ hẹn giờ nếu component bị unmount trước khi timeout hoàn tất
//     return () => clearTimeout(timerId);
//     }, []); // Chạy effect một lần khi component được mount

//     return (
//     <div>
//         {hienThi ? <h1>Thông điệp đã được hiển thị!</h1> : <h1>Chờ 5 giây...</h1>}
//     </div>
//     );
// }
/*

    Giải thích chi tiết:
        State (hienThi):
            Biến state này lưu trạng thái của việc hiển thị thông điệp (true hoặc false).

        useEffect:
            Khi component được render lần đầu, React sẽ thiết lập một bộ hẹn giờ setTimeout để thay đổi trạng thái hienThi thành true sau 5 giây.

        Cleanup với clearTimeout:
            Nếu component bị unmount trước khi hết 5 giây, clearTimeout(timerId) sẽ được gọi để dọn dẹp và ngăn bộ hẹn giờ thực hiện sau khi component đã bị gỡ bỏ.

        Mảng phụ thuộc rỗng ([]):
            Chỉ chạy effect này một lần khi component được mount.

        Kết quả:
            Sau 5 giây, thông điệp "Thông điệp đã được hiển thị!" sẽ xuất hiện. Nếu component bị gỡ bỏ trước khi hết 5 giây, setTimeout sẽ không được thực hiện.

        => Với cả hai ví dụ trên, việc sử dụng useEffect để xử lý các hàm hẹn giờ sẽ giúp bạn quản lý hiệu quả vòng đời của timer và tránh rò rỉ bộ nhớ.

*/


// useEffect with preview avatar
// function Content() {
//   // State để lưu URL tạm thời của ảnh đã chọn
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [avatarPreview, setAvatarPreview] = useState(null);

//   /** 
//    * useEffect sẽ được kích hoạt khi state avatarFile thay đổi.
//    * - Khi người dùng chọn tệp mới, avatarFile sẽ được cập nhật.
//    * - URL.createObjectURL(avatarFile) sẽ tạo một URL tạm thời từ tệp đó.
//    *   URL này được dùng để hiển thị ảnh trong thẻ <img>.
//    * - Trong hàm cleanup, URL.revokeObjectURL(objectUrl) sẽ được gọi
//    *   để giải phóng bộ nhớ và xóa URL tạm khi component bị unmount hoặc
//    *   khi người dùng chọn tệp ảnh khác.
//    * - Mảng phụ thuộc [avatarFile] đảm bảo effect chỉ chạy khi tệp ảnh thay đổi.
//    */
//   useEffect(() => {
//     // Nếu không có tệp nào được chọn thì không thực hiện gì cả
//     if (!avatarFile) {
//       return;
//     }

//     // Tạo URL tạm thời từ tệp ảnh
//     const objectUrl = URL.createObjectURL(avatarFile);
//     setAvatarPreview(objectUrl); // Cập nhật state để lưu URL tạm này

//     // Cleanup function: xóa URL tạm khi avatarFile thay đổi hoặc component unmount
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [avatarFile]);

//   /**
//    * Hàm handleFileChange sẽ được gọi khi người dùng chọn một tệp ảnh từ input.
//    * - Sự kiện onChange từ thẻ input sẽ cung cấp thông tin tệp trong e.target.files[0].
//    * - Nếu có tệp được chọn, hàm sẽ lưu tệp đó vào state avatarFile.
//    * - Khi avatarFile thay đổi, useEffect sẽ được kích hoạt để tạo URL tạm cho tệp này.
//    */
//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Lấy tệp đầu tiên mà người dùng chọn
//     if (file) {
//       setAvatarFile(file); // Cập nhật state với tệp ảnh đã chọn
//     }
//   };

//   return (
//     <div>
//       <h1>Tải lên Avatar</h1>
//       {/* Thẻ input để chọn tệp ảnh */}
//       <input type="file" accept="image/*" onChange={handleFileChange} />
      
//       {/* Hiển thị ảnh xem trước nếu URL tạm thời đã được tạo */}
//       {avatarPreview && (
//         <div>
//           <h2>Xem trước:</h2>
//           {/* Thẻ <img> sẽ hiển thị ảnh xem trước với kích thước và style cơ bản */}
//           <img src={avatarPreview} alt="Avatar preview" style={{ width: 1000, height: 500, objectFit: 'cover' }} />
//         </div>
//       )}
//     </div>
//   );
// }

/*
Giải thích chi tiết các phần comment:
    State:
        avatarFile: Lưu trữ tệp ảnh mà người dùng đã chọn.
        avatarPreview: Lưu URL tạm thời được tạo từ tệp ảnh, được sử dụng để hiển thị bản xem trước của ảnh.

    useEffect:
        useEffect sẽ được kích hoạt mỗi khi avatarFile thay đổi.
        Hàm URL.createObjectURL(avatarFile) sẽ tạo ra một URL tạm thời cho tệp ảnh để có thể xem trước mà không cần tải lên server.
        Hàm cleanup (URL.revokeObjectURL(objectUrl)) sẽ được gọi khi component bị unmount hoặc khi người dùng chọn một tệp ảnh mới. Điều này giúp giải phóng tài nguyên bộ nhớ.
        
    Hàm xử lý handleFileChange:
        Khi người dùng chọn tệp ảnh, hàm này sẽ lưu tệp ảnh vào state avatarFile. Sau đó, useEffect sẽ được kích hoạt để xử lý việc tạo URL tạm thời và hiển thị bản xem trước của ảnh.
        Hiển thị ảnh xem trước:
        Nếu có URL tạm thời (nếu người dùng đã chọn một tệp ảnh), ảnh sẽ được hiển thị thông qua thẻ <img> với các thuộc tính kích thước được quy định sẵn.
        
    Tóm tắt:
        useEffect giúp quản lý quá trình tạo và dọn dẹp URL tạm thời khi xem trước ảnh.
        Hàm cleanup trong useEffect đảm bảo không có rò rỉ bộ nhớ khi tệp ảnh thay đổi hoặc khi component bị gỡ bỏ khỏi DOM.
        URL tạm thời là một cách tốt để xem trước ảnh trước khi tệp được tải lên server.
        
    Như vậy, với các comment chi tiết, mã nguồn dễ hiểu và dễ duy trì hơn, đồng thời đảm bảo sự chính xác khi xử lý các tác vụ liên quan đến ảnh đại diện.
*/


// useEffect with fake Chat App
// function Content() {
//   // State để lưu trữ danh sách tin nhắn
//   const [messages, setMessages] = useState([
//     { id: 1, text: 'Xin chào!' },
//     { id: 2, text: 'Làm thế nào để sử dụng React?' }
//   ]);

//   /**
//    * useEffect để mô phỏng việc nhận tin nhắn mới từ người khác mỗi giây.
//    * - Hàm setInterval được sử dụng để thêm một tin nhắn mới vào danh sách mỗi 2 giây.
//    * - Tin nhắn sẽ được thêm vào state 'messages' thông qua hàm setMessages.
//    * - Khi component unmount hoặc tin nhắn thay đổi, useEffect sẽ dọn dẹp interval này bằng cách gọi clearInterval.
//    */
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Tạo tin nhắn giả mới
//       const newMessage = { id: messages.length + 1, text: 'Tin nhắn mới đã đến!' };

//       // Cập nhật state với tin nhắn mới
//       setMessages(prevMessages => [...prevMessages, newMessage]);
//     }, 2000); // Thêm tin nhắn mới mỗi 2 giây

//     // Cleanup: Dọn dẹp setInterval khi component unmount
//     return () => clearInterval(intervalId);
//   }, [messages]); // Mỗi khi 'messages' thay đổi, useEffect sẽ chạy lại

//   return (
//     <div>
//       <h1>Fake Chat App</h1>
//       <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
//         {/* Render danh sách tin nhắn */}
//         {messages.map(message => (
//           <div key={message.id} style={{ marginBottom: '10px', padding: '5px', backgroundColor: '#f1f1f1' }}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/*
    State:
        messages: Một mảng chứa danh sách các tin nhắn. Mỗi tin nhắn là một object có id và text.

    useEffect:
        Mô phỏng việc nhận tin nhắn mới: Sử dụng setInterval để thêm một tin nhắn mới mỗi 2 giây vào mảng messages.
        Hàm cleanup: Hàm clearInterval(intervalId) được gọi trong cleanup của useEffect để dừng interval khi component bị unmount, ngăn rò rỉ bộ nhớ.
        Mảng phụ thuộc [messages]: Khi state messages thay đổi (tức là mỗi lần có tin nhắn mới), useEffect sẽ chạy lại để cập nhật tin nhắn.

    Render danh sách tin nhắn:
        Sử dụng map để lặp qua mảng messages và hiển thị từng tin nhắn.
        Mỗi tin nhắn được bọc trong một thẻ <div> với một số styling cơ bản như padding và màu nền.
        
    Tóm tắt:
        useEffect được sử dụng để thiết lập một quá trình liên tục nhận tin nhắn mới thông qua setInterval.
        Cleanup trong useEffect với clearInterval đảm bảo rằng khi component bị unmount, ứng dụng sẽ không tiếp tục thêm tin nhắn mới nữa.
        Ứng dụng mô phỏng một môi trường chat cơ bản, nơi tin nhắn được tự động cập nhật liên tục như thể chúng đến từ một server.
*/



// useLayoutEffect
// VD: Chạy đến 3 rồi quay lại về 0
// function Content() {
//     const [count, setCount] = useState(0);

//     useLayoutEffect(() => {
//         if (count > 3) {
//             setCount(0);
//         }
//     }, [count])

//     function handleBtnStart() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleBtnStart}>Run</button>
//         </div>
//     )
// }

/**
 * Hai đoạn code sử dụng useEffect và useLayoutEffect có chức năng tương tự 
 * trong việc cập nhật giá trị count và đặt lại nó về 0 khi count > 3. 
 * Tuy nhiên, chúng không hoàn toàn có cùng hiệu quả do sự khác biệt cơ bản giữa hai hook này:
 * 
 * useEffect:
 * - Thực hiện sau khi render: useEffect chạy sau khi React đã hoàn tất việc render giao diện người dùng. 
 *   Điều này có nghĩa là cập nhật giao diện sẽ được hiển thị trước, sau đó useEffect sẽ chạy để kiểm tra điều kiện và cập nhật lại nếu cần.
 * - Hiệu ứng không chặn render: Giao diện sẽ không bị chặn trong khi useEffect thực hiện công việc của nó.
 * 
 * useLayoutEffect:
 * - Thực hiện ngay trước khi render: useLayoutEffect chạy đồng bộ sau khi DOM được cập nhật nhưng trước khi trình duyệt thực sự vẽ (paint) 
 *   thay đổi ra màn hình. Điều này có thể ảnh hưởng trực tiếp đến những gì người dùng thấy, 
 *   vì bất kỳ thay đổi nào được thực hiện bên trong useLayoutEffect sẽ được áp dụng ngay lập tức trước khi giao diện được hiển thị.
 * - Chặn render: Giao diện sẽ không được vẽ ra màn hình cho đến khi useLayoutEffect hoàn tất.
 * 
 * Sự khác biệt trong tình huống này:
 * - Khi sử dụng useEffect, React sẽ render count > 3 lên màn hình, sau đó hàm setCount(0) mới chạy, 
 *   và giá trị count = 0 sẽ được hiển thị sau khi hiệu ứng kết thúc. Người dùng có thể thấy sự nhấp nháy giữa giá trị 4 và 0 trong khoảnh khắc rất ngắn.
 * - Với useLayoutEffect, vì hook này chạy trước khi trình duyệt vẽ nên khi count vượt quá 3, 
 *   React sẽ ngay lập tức đặt lại count về 0 mà không render giá trị lớn hơn 3. Người dùng sẽ không thấy giá trị count = 4 trên màn hình.
 * 
 * Khi nào nên dùng?
 * - Dùng useEffect cho các hiệu ứng không ảnh hưởng trực tiếp đến layout của giao diện.
 * - Dùng useLayoutEffect khi cần đảm bảo rằng mọi thay đổi về trạng thái phải xảy ra trước khi giao diện được vẽ ra màn hình 
 *   để tránh "nhấp nháy" hay lỗi hiển thị tạm thời.
*/

// useRef
// VD: start and stop number
// let intervalId
// function Content() {
//     const [count, setCount] = useState(60);
    

//     function handleStart() {
//         intervalId = setInterval(() => {
//             setCount(prevCount => prevCount - 1);
//         }, 1000);
//     }
    
//     function handleStop() {
//         clearInterval(intervalId);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }


// Used useRef
// function Content() {
//     const [count, setCount] = useState(60);
    
//     let intervalId = useRef();

//     function handleStart() {
//         intervalId.current = setInterval(() => {
//             setCount(prevCount => prevCount - 1);
//         }, 1000);
//     }
    
//     function handleStop() {
//         clearInterval(intervalId.current);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }

/*
    Những lỗi bạn gặp phải khi sử dụng useRef với setInterval có thể xuất phát từ việc mỗi lần bấm nút "Start", 
    một setInterval mới được tạo ra mà không có cơ chế dừng interval cũ, dẫn đến:
        1.Ấn "Start" nhiều lần: Tạo ra nhiều interval, làm cho đồng hồ đếm ngược nhanh hơn.
        2.Ấn "Stop" không dừng được: Vì chỉ dừng một interval, nhưng có thể có nhiều interval đang chạy song song.
    Giải pháp:
        Bạn cần kiểm tra xem có interval nào đang chạy trước khi tạo một interval mới, đồng thời đảm bảo rằng khi bấm "Stop", tất cả các interval đang chạy sẽ được dừng lại.
*/

//Sau khi fix lỗi
// function Content() {
//     const [count, setCount] = useState(60);
    
//     // Sử dụng useRef để lưu giữ id của interval
//     let intervalId = useRef(null);

//     // Lấy giá trị trước đó 
//     let prevCount = useRef(null);
    
//     // Khi count thay đ��i, update lại prevCount.current để tiện cập nhật khi render
//     useEffect(() => {
//         prevCount.current = count;
//     }, [count])

//     function handleStart() {
//         // Kiểm tra xem interval có đang chạy không, nếu có thì không tạo thêm interval mới
//         if (!intervalId.current) {
//             intervalId.current = setInterval(() => {
//                 setCount(prevCount => prevCount - 1);
//             }, 1000);
//         }
//     }
    
//     function handleStop() {
//         // Dừng interval và đặt giá trị intervalId.current về null để có thể khởi động lại
//         clearInterval(intervalId.current);
//         intervalId.current = null;
//     }

//     // In ra giá trị count và giá trị trước đó để xem kết quả
//     console.log(count, prevCount.current);
    

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     );
// }

/**
 * Giải thích:
 * 
 * 1. Kiểm tra `intervalId.current` trước khi tạo `setInterval`:
 *    - Đảm bảo rằng chỉ có **một** interval đang chạy tại bất kỳ thời điểm nào.
 *    - Nếu `intervalId.current` không phải `null`, nghĩa là interval đang chạy, và không cần tạo thêm interval mới.
 * 
 * 2. Dừng đúng interval:
 *    - Khi bấm "Stop", interval đang chạy sẽ được dừng lại bằng cách gọi `clearInterval(intervalId.current)`.
 *    - Sau đó, đặt `intervalId.current` về `null` để cho phép khởi động lại từ đầu khi bấm "Start" lần sau.
 * 
 * Kết quả:
 * - **Nút "Start"** sẽ chỉ bắt đầu một interval, ngay cả khi nhấn nhiều lần.
 * - **Nút "Stop"** sẽ luôn dừng interval hiện tại một cách chính xác.
*/

// Get element position
// function Content() {
//     const [count, setCount] = useState(60);
    
//     // Sử dụng useRef để lưu giữ id của interval
//     const intervalId = useRef(null);

//     // Lấy giá trị trước đó 
//     const prevCount = useRef(null);

//     // Get element và lấy ra vị trí của phần tử đó trong DOM
//     const h1Ref = useRef();

//     useEffect(() => {
//         const rect = h1Ref.current.getBoundingClientRect();
//         console.log(rect);
//     }, [])
    
//     // Các hàm xử lý nút bấm
//     function handleStart() {
//         // Kiểm tra xem interval có đang chạy không, nếu có thì không tạo thêm interval mới
//         if (!intervalId.current) {
//             intervalId.current = setInterval(() => {
//                 setCount(prevCount => prevCount - 1);
//             }, 1000);
//         }
//     }
    
//     function handleStop() {
//         // Dừng interval và đặt giá trị intervalId.current về null để có thể khởi động lại
//         clearInterval(intervalId.current);
//         intervalId.current = null;
//     }    

//     // Return JSX DOM element
//     return (
//         <div>
//             <h1 ref={h1Ref}>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     );
// }



//-------------------------------------------------------------------------------------------------------------------



/*

    Bài tập 1: Đếm số lần nhấp chuột (useState, useEffect)
        Mô tả: Tạo một component có một nút bấm. Mỗi lần nhấn nút, số đếm tăng lên 1. 
        Khi component được hiển thị lần đầu tiên, sử dụng useEffect để in ra thông báo "Component đã được hiển thị".

*/

// function Content() {
//     // Sử dụng useState để lưu trữ giá trị đếm
//     const [count, setCount] = useState(0);

//     // Sử dụng useEffect để in ra thông báo khi component được hiển thị lần đầu tiên
//     useEffect(() => {
//         console.log('Component đã được hiển thị');
//     }, []);

//     return (
//         <div>
//             <h1>Số lần nhấp: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Nhấp vào đây</button>
//         </div>
//     );
// }



//-------------------------------------------------------------------------------------------------------------------
/*

    Bài tập 2: Đồng hồ đếm ngược tự động (useState, useEffect, useRef)
        Mô tả: Tạo một đồng hồ đếm ngược từ 10 xuống 0. Khi đếm ngược xong, in ra thông báo "Đã hết giờ". 
        Bạn cần dùng useRef để quản lý setInterval và dừng bộ đếm nếu đồng hồ đã đếm đến 0.

*/

// function Content() {
//     // Sử dụng useState để lưu trữ giá trị của đồng hồ đếm ngược
//     const [timeLeft, setTimeLeft] = useState(10);
    
//     // Sử dụng useEffect để bắt đầu đếm ngược khi component được render
//     useEffect(() => {
//         intervalId.current = setInterval(() => {
//             setTimeLeft(prevTimeLeft => {
//                 if (prevTimeLeft > 0) {
//                     return prevTimeLeft - 1;
//                 } else {
//                     clearInterval(intervalId.current);
//                     console.log('Đã hết giờ!');
//                     return prevTimeLeft;
//                 }
//             });
//         }, 1000)

//         // Lỗi này xảy ra do chúng ta không dừng setInterval khi thời gian còn lại đến 0.
//         // Khi đếm ngược xong, chúng ta dừng setInterval và log thông báo, nhưng khi component đã bị gỡ bỏ,
//         // clearInterval vẫn đang chạy và log thông báo vẫn chưa xảy ra.
//         // Để tránh lỗi này, chúng ta nên dùng useEffect để dừng setInterval khi component đã bị gỡ bỏ.
//         return () => clearInterval(intervalId.current);
//     }, [timeLeft])

//     // Sử dụng useRef để lưu trữ id của setInterval
//     const intervalId = useRef(null);
    
//     // Return JSX DOM element
//     return (
//         <div>
//             <h1>Thời gian còn lại: {timeLeft}</h1>
//         </div>
//     );
// }

// Error: Lỗi sau khi về 0 con số lại nhấp nháy và re-render log nhiều lần



//-------------------------------------------------------------------------------------------------------------------
/*

    Bài tập 3: Lưu kích thước của cửa sổ (useState, useEffect)
        Mô tả: Tạo một component để theo dõi kích thước của cửa sổ trình duyệt (chiều rộng và chiều cao). 
        Khi kích thước thay đổi, component sẽ cập nhật giá trị này trong giao diện.

*/

// function Content() {
//     // Sử dụng useState để lưu trữ chiều rộng và chiều cao của cửa sổ
//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);


//     // Sử dụng useEffect để thêm sự kiện 'resize' và cập nhật state khi cửa sổ thay đổi kích thước
//     useEffect(() => {
//         function handleResizeWidth() {
//             setWidth(window.innerWidth);
//         }

//         window.addEventListener('resize', handleResizeWidth)
//     }, [width])

//     useEffect(() => {
//         function handleResizeHeight() {
//             setHeight(window.innerHeight);
//         }

//         window.addEventListener('resize', handleResizeHeight)
//     }, [height])

//     return (
//         <div>
//             <h1>Chiều rộng: {width}, Chiều cao: {height}</h1>
//         </div>
//     );
// }

/*

    Nhận xét và cải thiện:
        Hoạt động chính xác: Mã hiện tại đã hoạt động đúng khi theo dõi cả chiều rộng và chiều cao của cửa sổ. 
        Tuy nhiên, bạn có thể gom hai state width và height thành một object để làm code gọn hơn.
        Cải thiện nhỏ: Gom hai state lại thành một object trong useState để tránh phải sử dụng nhiều lần useEffect.

*/

//Code sau khi cải thiện 
// function Content() {
//     // Sử dụng useState để lưu trữ cả chiều rộng và chiều cao trong một object
//     const [windowSize, setWindowSize] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight,
//     });

//     // Sử dụng useEffect để thêm sự kiện 'resize' và cập nhật state khi cửa sổ thay đổi kích thước
//     useEffect(() => {
//         function handleResize() {
//             setWindowSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         }

//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div>
//             <h1>Chiều rộng: {windowSize.width}, Chiều cao: {windowSize.height}</h1>
//         </div>
//     );
// }


  

//-------------------------------------------------------------------------------------------------------------------
/*

    Bài tập 4: Di chuyển phần tử (useState, useEffect, useLayoutEffect)
        Mô tả: Tạo một ô vuông trên màn hình. Khi cửa sổ tải xong, sử dụng useLayoutEffect để di chuyển ô vuông tới vị trí giữa của màn hình. 
        Khi nhấn nút "Di chuyển", ô vuông sẽ di chuyển sang phải một khoảng cố định.

*/

// Đề bài
// function Content() {
//     // Sử dụng useState để lưu trữ vị trí của ô vuông
//     const [positionBox, setPositionBox] = useState(0);

//     // Sử dụng useLayoutEffect để đặt ô vuông ở giữa màn hình khi component được hiển thị
//     useLayoutEffect(() => {
//         const container = document.getElementById('container');
//         container.style.position ='relative';
//         container.style.display = 'flex';
//         container.style.justifyContent = 'center';
//         container.style.alignItems = 'center';
//     }, [positionBox])

//     return (
//         <div>
//             <div id="container" style={{ width: '50px', height: '50px', background: 'red', position: 'absolute', left: `${positionBox}px`, top: '50%' }}>BOX</div>
//             <button onClick={() => setPositionBox(positionBox + 50)}>Di chuyển sang phải</button>
//         </div>
//     );
// }

// function Content() {
//     const inputRef = useRef(null);
//     useEffect(() => {
//         inputRef.current.focus(); // Truy cập DOM element
//     }, []);

      
// }

// React.memo
// Ko render component con ko can thiet 

// function Content({ count, count2 }) {
//     console.log('Component child rendered');

//     return (
//         <div>
//             <h1>Xin chao ae hoc bai React.memo {count} {count2}</h1>
//         </div>
//     )
// }

// function Content({ count }) {
//     console.log('Child component re-rendered!');
//     return <div>Count from Parent: {count}</div>;
// }


// useCallBack
// useCallBack: dùng để tránh tạo ra hàm mới không cần thiết trong component

// function Content({onIncrease}) {
//     console.log("re-rendered content");
    

//     return (
//         <div>
//             <h1>Xin chao ae hoc bai React.memo</h1>
//             <button onClick={(onIncrease)}>Click me!</button>
//         </div>
//     )
// }

function Content() {

}
  

export default Content;