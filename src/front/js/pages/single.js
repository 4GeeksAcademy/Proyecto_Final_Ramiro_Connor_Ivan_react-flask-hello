// import React, { useState, useEffect, useContext } from "react";
// import { useTranslation } from 'react-i18next';
// import { Context } from "../store/appContext";

// const MyComponent = () => {
//     const { t, i18n } = useTranslation();
//     const { store, actions } = useContext(Context);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         actions.fetchCountryInfo(); // Call the fetchData action from the store
//     }, []);

//     useEffect(() => {
//         setData(store.fetchedData); // Update component state with fetched data from store
//     }, [store.fetchedData]);
//     console.log(store.fetchedData?.information);
//     return (
//         <div>
//             <h1>Shows here</h1>
//             {data && (
//                 <div>
					
//                     <h2>{t('title')}</h2>
//                     <p>{t('description')}</p>
//                     {/* Display other fetched data */}
//                     <p>{data.information}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyComponent;
