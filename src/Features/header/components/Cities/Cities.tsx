import { FiNavigation } from 'react-icons/fi';
import { ReactElement, useMemo, useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';

import { useLazyFetchCityListQuery } from '../Sidebar/SidebarSlice';
import { CityList } from './Cities.types';

export const Cities = (): ReactElement => {
  const [page, setPage] = useState(0);
  const [offset] = useState(8);

  const [trigger, result] = useLazyFetchCityListQuery();
  // const { data, isFetching } = useFetchCityListQuery(page);

  const handleCityClick = useCallback(() => {
    return result.data;
  }, [result.data]);

  useEffect(() => {
    trigger({ page, offset });
    setPage((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = useCallback(() => {
    trigger({ page, offset });
    setPage((prev) => prev + 1);
  }, [trigger, offset, page]);

  return useMemo(
    () => (
      <div className="scroll-smooth" id="scrollableDiv">
        {result.isLoading ? (
          <LoadingSpinner />
        ) : (
          <InfiniteScroll
            dataLength={result.data?.length ?? 0}
            next={fetchMoreData}
            loader={<LoadingSpinner />}
            hasMore={result.data?.length < 38}
            // scrollableTarget="scrollableDiv"
            endMessage={
              <p className="text-black text-center font-rex mt-2.5">You are already at the end</p>
            }
          >
            <ul>
              {result.data?.map(({ id, name, branch }: CityList) => (
                <li key={id} className="border-xl" onClick={handleCityClick}>
                  <div className="flex p-2 m-2 font-button_font">
                    <FiNavigation color="#BFA15C" size={20} fill="#BFA15C" className="mt-4" />
                    <div className="ml-4">
                      <p className="font-medium text-gold-title">{name}</p>
                      <p>{branch} филиалов</p>
                    </div>
                  </div>
                  <hr className="bg-black h-0.5 w-11/12 ml-4" />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    ),
    [handleCityClick, fetchMoreData, result.data, result.isLoading],
  );
};
