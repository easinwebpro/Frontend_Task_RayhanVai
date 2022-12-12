import React from 'react';
import { useRouter } from 'next/router';
// import qs from 'qs';
import { ProductDetails } from 'components/Product/ProductDetails';
import Layout from 'components/Layout/Layout';
import { useGetProductsDataQuery } from 'store/services/productsApi';
// import { product_dtos } from 'utils/helpers/product_dtos';

const productDetails = () => {
    
    const router = useRouter()
    const { slug } = router.query;

    // const queryString = qs.stringify({
    //     populate: '*',
    //     filters: {
    //         slug: {
    //             $eq: slug,
    //         },
    //     },
    // });

    const { data, isLoading, isError, status } = useGetProductsDataQuery('');
    console.log(data, isLoading,);
    
    // const product = product_dtos(data);

    // return (
    //     <Layout loader={isLoading}>
    //         <div><Toaster position="top-right" reverseOrder={false} /></div>
    //         <div>
    //             {
    //                 product?.length && <ProductDetails product={product} isError={isError} status={status} />
    //             }
    //         </div>
    //     </Layout>
    // )
    return <h4>Product Details{slug}</h4>

    
}

export default productDetails;
