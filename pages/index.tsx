import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col max-w-xl text-center justify-center">
          <p className={title()}>This Proyect call&nbsp;</p>
          <h3 className={title({ color: "violet" })}>Gali-Ibex&nbsp;</h3>
          <br />
          
          <div className={subtitle({ class: "mt-4" })}>
            Mini proyect to consult data about symbols, trends,financials and quotes.This proyect will receive more updates and changes, this is the first version
          </div>
          <p className="text-violet-400">For more proyects, visit my github</p>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

      </section>
    </DefaultLayout>
  );
}
