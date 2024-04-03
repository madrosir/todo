import { Results } from "@/components/search/results";
import NotesList from "@/components/notes/NotesList";
import { initailuser } from "@/lib/user";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
};
const SearchPage = async ({
  searchParams,
}: SearchPageProps) => {

  await initailuser();

  return (

    <main className="relative flex w-full items-center justify-center border bg-slate-200 pb-16">
      <div className="mt-5 w-full">
        {searchParams.term === undefined ? <NotesList /> : <Results term={searchParams.term} />}
      </div>
    </main>
  );
};

export default SearchPage;