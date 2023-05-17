import { useRouter } from "next/router";
import NextLink from "next/link";

export function Breadcrumbs() {
  const router = useRouter();
  const { pathname } = router;

  // Divide la ruta actual en segmentos
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div>
      {/* Renderiza el enlace a la página de inicio */}
      <NextLink href="/">Inicio</NextLink>

      {/* Renderiza las migas de pan para cada segmento de la ruta */}
      {pathSegments.map((segment, index) => {
        // Construye la ruta actual acumulativa
        const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return (
          <span key={segment}>
            {" "}
            / <NextLink href={breadcrumbPath}>{segment}</NextLink>
          </span>
        );
      })}
    </div>
  );
}
