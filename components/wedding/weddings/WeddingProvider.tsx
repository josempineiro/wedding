import { useState, createContext, useContext } from "react";
import cn from "classnames";
import { Wedding } from "@/domain/wedding/entities/Wedding";
import { useWeddings } from "@/hooks/wedding/use-cases/useWeddings";
import { Modal, useModal } from "@/components/core/content/modal/Modal";
import { WeddingGettingStart } from "@/components/wedding/weddings/getting-start/WeddingGettingStart";

export interface WeddingContextValue {
  wedding: Wedding;
}

export const WeddingContext = createContext<WeddingContextValue | undefined>(
  undefined
);

export const useWeddingContext = () => {
  const weddingContext = useContext(WeddingContext);
  if (!weddingContext) {
    throw new Error("useWeddingContext must be used within a WeddingProvider");
  }
  return weddingContext;
};

export function WeddingProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [wedding, setWedding] = useState<Wedding | undefined>(undefined);

  const { data, loading, error } = useWeddings({
    onCompleted(data) {
      const nodes = data.weddingCollection?.edges || [];
      if (nodes.length === 1) {
        const node = nodes[0].node;
        setWedding(
          Wedding.create({
            id: node.id,
            name: node.name,
            datetime: node.datetime ? new Date(node.datetime) : undefined,
          })
        );
      }
    },
  });

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (wedding) {
    return (
      <WeddingContext.Provider
        value={{
          wedding,
        }}
      >
        {children}
      </WeddingContext.Provider>
    );
  }
  if (data) {
    if (data.length === 0) {
      return <WeddingGettingStart />;
    }
    if (data.length > 1) {
      return (
        <Modal
          title="Which Wedding to Manage?"
          visible={!wedding}
          closable={false}
          className="py-4 px-8"
        >
          <div className="mb-4">
            <p className="max-w-sm text-sm text-gray-300">
              Select a wedding to gain exclusive management access and
              efficiently plan and organize all the details of your special day.
            </p>
          </div>
          <ul className="flex flex-col gap-4 min-w-fit">
            {data.map((wedding) => (
              <li key={wedding.id}>
                <button
                  className={cn([
                    "w-full h-20 rounded-md transition-all",
                    "ring-2 ring-blue-200 rounded-md shadow-md",
                    "hover:ring-blue-600 hover:shadow-blue-400 hover:scale-105 ",
                  ])}
                  onClick={() => setWedding(wedding)}
                >
                  <div className="flex flex-col">
                    {wedding.name}
                    {wedding.datetime && (
                      <span className="text-xs">
                        {wedding.datetime.toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      );
    }
    if (error) {
      return <>Something was wrong!</>;
    }
  }
}
