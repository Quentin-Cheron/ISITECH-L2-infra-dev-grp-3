import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const films = [
  { id: 1, name: "Silence !", categorie: "Horror" },
  { id: 2, name: "Titanic", categorie: "Drama" },
  { id: 2, name: "Murder", categorie: "Horror" },
];

const categorie = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

type Categorie = {
  id: number;
  name: string;
};

const Filter = () => {
  const [selected, setSelected] = useState<Categorie>(categorie[3]);

  function afficherFilmsParCategorie(categorieName: string) {
    const filmsFiltres = films.filter(
      (film) => film.categorie === categorieName
    );

    if (filmsFiltres.length > 0) {
      console.log(`Films dans la catégorie "${categorieName}":`);
      filmsFiltres.forEach((film) => console.log(film.name));
    } else {
      console.log(`Aucun film trouvé dans la catégorie "${categorieName}".`);
    }
  }

  return (
    <>
      <div className="m-4 flex w-[500px] justify-between">
        <div>
          <div className="mt-2">
            <input
              name="categories"
              placeholder="Titanic"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {categorie.map((cat) => (
                <ListboxOption
                  key={cat.id}
                  value={cat}
                  className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                    {cat.name}
                  </span>

                  <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        <button
          type="button"
          className="rounded-md bg-indigo-50 px-2.5 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          onClick={() => afficherFilmsParCategorie(selected.name)}
        >
          Filter
        </button>
      </div>
    </>
  );
};

export default Filter;
