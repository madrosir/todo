'use client';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

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
        <div className="relative flex flex-1 flex-shrink-0 inputBox_container">
            <label htmlFor="search" >
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-slate-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500 inputBox"
                placeholder="dsf"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}

            />

        </div>
    );
} <div class="inputBox_container">
    <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
        </path>
    </svg>
    <input class="inputBox" id="inputBox" type="text" placeholder="Search For Products">
</div>