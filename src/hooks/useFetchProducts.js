import { useState, useEffect } from 'react';
import { getModalData } from '../services/TmbServicesModal';

export function useFetchProduct(type, id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id || !type) return;

        let isMounted = true;

        async function fetchProduct() {
            try {
                const data = await getModalData(type, id);
                if (isMounted) {
                    setProduct(data);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchProduct();

        return () => {
            isMounted = false;
        };
    }, [type, id]);

    return { product, loading };
}
