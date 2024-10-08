'use client';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

export function Search() {
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


    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <SearchIcon className='absolute ml-1 mt-2' />
            <input
                className="peer block w-full rounded-xl border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Search"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}

            />

        </div>
    );
}