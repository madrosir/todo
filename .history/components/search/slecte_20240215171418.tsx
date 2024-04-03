"use client"
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

const selected = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('term', term);
        } else {
            params.delete('term');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 1000);
    return (  );
}

export default selected;