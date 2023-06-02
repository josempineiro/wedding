import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function BreadcrumbItem({
  children,
  first,
  last,
}: {
  children: React.ReactNode;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={cn([
        "h-full flex py-0 px-2 bg-white relative",
        {
          "pl-1": !first,
          "rounded-lg ": last,
          "rounded-l-lg": !last,
        },
      ])}
    >
      {!first && (
        <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-0 w-0 border-white border-l-transparent border-12"></span>
      )}
      <span className="relative flex items-center">{children}</span>
      {!last && (
        <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 h-0 w-0 border-transparent border-12 border-l-white"></span>
      )}
    </div>
  );
}

export function Breadcrumbs({}) {
  const router = useRouter();
  const { pathname } = router;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="container mx-auto py-2 px-4 flex gap-4 h-10">
      <NextLink href="/">
        <BreadcrumbItem first last={pathSegments.length === 0}>
          <FontAwesomeIcon className="h-4 w-4" icon={faHouse} />
        </BreadcrumbItem>
      </NextLink>

      {pathSegments.map((segment, index) => {
        const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const lastCrumb = pathSegments.length - 1 === index;
        return (
          <NextLink
            key={segment}
            href={breadcrumbPath}
            className={cn({
              "cursor-default pointer-events-none": lastCrumb,
            })}
          >
            <BreadcrumbItem last={lastCrumb}>{segment}</BreadcrumbItem>
          </NextLink>
        );
      })}
    </div>
  );
}
