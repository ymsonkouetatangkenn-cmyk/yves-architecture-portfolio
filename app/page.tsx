export default function Home() {
  const projects = [
    {
      title: "CASA INDUSTRIALE, Rome, Italie",
      description:
        "Le projet repose sur une reconfiguration complète de l’espace. La suppression de cloisons a permis d’ouvrir les volumes et de fluidifier les circulations, tandis que de nouvelles parois ont été implantées pour structurer les fonctions et optimiser chaque surface. Au cœur de l’ensemble, un escalier inspiré de Francesco Librizzi devient l’élément central. Plus qu’un simple accès, il organise l’espace par sa légèreté et sa verticalité, créant un lien fort entre les niveaux. Autour de lui, perspectives, mobilier et flux s’articulent pour former un espace cohérent, fluide et pleinement valorisé.",
      tags: ["Architecture d'intérieur", "Design", "Allestimento"],
      cover: "/CASA INDUSTRIALE.jpg",
      pages: [
        "/casa-industriale 1.jpg",
        "/casa-industriale 2.jpg",
        "/casa-industriale 3.jpg",
        "/casa-industriale 4.jpg",
        "/casa-industriale 5.jpg",
        "/casa-industriale 6.jpg",
        "/casa-industriale 7.jpg",
      ],
    },
    {
      title: "BIBLIOTECA, Sant'Elpidio, Italie",
      description:
        "Ce projet de bibliothèque dépasse la typologie classique pour devenir un véritable dispositif urbain. Le bâtiment existant est conservé et transformé en espace d’exposition, affirmant son rôle de repère culturel. Une plateforme surélevée vient enrichir le site en créant une double lecture : un rez-de-sol ouvert et traversant, et des parcours en hauteur offrant de nouveaux usages et perspectives. L’ensemble compose un lieu dynamique où patrimoine et intervention contemporaine dialoguent.",
      tags: ["Modélisation", "Conception", "Échelle urbaine"],
      cover: "/BIBLIOT.jpg",
      pages: [
        "/biblio1.jpg",
        "/biblio2.jpg",
        "/biblio3.jpg",
        "/biblio4.jpg",
        "/biblio5.jpg",
        "/biblio6.jpg",
        "/biblio7.jpg",
      ],
    },
    {
      title: "QUARTO LUOGO, Douala, Cameroun",
      description:
        "Mon projet de thèse propose un centre culturel à Douala conçu comme un catalyseur urbain. Il interconnecte activités culturelles, éducatives et sociales au sein d’un système ouvert, structuré par des parcours fluides et des espaces partagés. L’architecture intègre une approche bioclimatique adaptée au climat tropical, favorisant ventilation et confort. Une toiture dynamique unifie l’ensemble, tandis que des volumes ouverts prolongent la vie urbaine à l’intérieur. Le projet forme ainsi un lieu vivant, pensé comme une extension du tissu social et urbain.",
      tags: ["Projet", "Architecture", "Concepts"],
      cover: "/QUARTO LUOGO.jpg",
      pages: [
        "/q1.png",
        "/master plan .jpg",
        "/W.jpg",
        "/Y.jpg",
        "/X.jpg",
        "/cover.png",
        "/r1.png",
        "/vue haut.png",
        "/5.png",
        "/enhanced_5.png",
        "/4.png",
      ],
    },
    {
      title: "Riqualificazione Urbana, Bonaberi, Cameroun",
      description:
        "Ce projet propose une stratégie de requalification à Bonabéri, à Douala, face aux inondations saisonnières. L’analyse du site (flux, tissu urbain, contraintes et potentiels) a guidé une approche résiliente et adaptée au contexte local. Le master plan s’articule autour d’un parc inondable capable d’absorber les crues, combinant infrastructure écologique et espace public. Les nouvelles constructions sur pilotis permettent de maintenir les usages tout en répondant au risque. Le projet transforme ainsi une contrainte naturelle en opportunité d’aménagement durable.",
      tags: ["Urbanisme", "Paysage", "Riqualificazione"],
      cover: "/RIQUALIFICAZIONE.jpg",
      pages: [
        "/Artboard 15.jpg",
        "/Artboard 16.jpg",
        "/Artboard 17.jpg",
        "/Artboard 18.jpg",
        "/Artboard 19.jpg",
        "/Artboard 20.jpg",
        "/Artboard 21.jpg",
      ],
    },
  ];

  const competitions = [
    {
      title: "KAIRA LOORO",
      description:
        "Ajoute ici la description complète de ton concours Kaira Looro : concept, stratégie architecturale, réponse au site, matériaux, approche environnementale et éléments forts du projet.",
      tags: ["Concours", "Conception", "Architecture"],
      cover: "/KAIRA.PNG",
      pages: [
        "/Artboard 40 copy 7.jpg",
        "/Artboard 40 copy 8.jpg",
        "/k1.png",
        "/kaira.png",
        "/rendu 4.jpg",
        "/rendu 2.jpg",
        
      ],
    },
    {
      title: "LIGNANO GARDEN",
      description:
        "Ajoute ici ton deuxième concours en expliquant les objectifs, la réponse architecturale et les outils mobilisés.",
      tags: ["Concours", "Paysage", "Innovation"],
      cover: "/GARDEN.PNG",
      pages: [
        "/54024_1.pdf",
        "/54024_2.pdf",
        
      ],
    },
  ];

  const skills = [
    "Architecture",
    "Modélisation BIM",
    "Gestion de projet",
    "Conception architecturale",
    "Environnements collaboratifs",
    "Architecture & paysage",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Yves Merlin SONKOUE TATANG
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">
              À propos
            </a>
            <a href="#projects" className="hover:text-white">
              Projets
            </a>
            <a href="#competitions" className="hover:text-white">
              Concours
            </a>
            <a href="#cv" className="hover:text-white">
              CV
            </a>
            <a href="#skills" className="hover:text-white">
              Compétences
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/cver.png"
          alt="Image de couverture du portfolio"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              Portfolio personnel
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-white/80">Yves Merlin SONKOUE TATANG</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Architecte BIM Modeler, je développe une approche rigoureuse de la
              conception, de la modélisation et de la gestion des projets
              architecturaux, avec un intérêt particulier pour les outils
              numériques, la collaboration et l&apos;impact environnemental.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Voir mes projets
              </a>
              <a
                href="#cv"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Qui je suis
            </h2>

            <div className="mt-6">
              <img
                src="/cover2.png"
                alt="Logo de Yves Merlin Sonkoue Tatang"
                className="h-40 object-contain"
              />
            </div>
          </div>

          <div className="text-white/75">
            <p className="leading-8">
              Diplômé d’un Master 2 en architecture de l’Université de Camerino
              (UNICAM, Italie), je dispose d’une solide formation en conception
              architecturale et en gestion de projets. Je suis particulièrement
              intéressé par les enjeux liés au BIM, aux environnements
              collaboratifs ainsi qu’à la relation entre architecture et
              paysage.
            </p>
            <p className="mt-6 leading-8">
              Je suis actuellement en projet d’intégrer un Mastère Spécialisé
              BIM Manager à Lyon afin de me spécialiser dans les outils
              numériques et la gestion des données appliquées aux projets
              complexes. Je me définis comme une personne jeune, responsable,
              rigoureuse et motivée, avec une forte volonté de développer mes
              compétences et de m’impliquer dans des projets à valeur technique
              et environnementale.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Projets
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Mes projets
          </h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Une sélection de projets architecturaux illustrant ma démarche de
            conception, ma maîtrise des outils numériques et ma rigueur
            technique.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <article key={project.title} className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Projet
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto pb-4">
                <div className="flex w-max gap-6">
                  {project.pages.map((page, index) => (
                    <div
                      key={index}
                      className="w-[900px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black"
                    >
                      <div className="aspect-[297/210] w-full">
                        <img
                          src={page}
                          alt={`${project.title} - page ${index + 1}`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="competitions" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Concours
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Mes concours
          </h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Une sélection de concours mettant en avant ma capacité à proposer
            des réponses architecturales créatives, sensibles et structurées.
          </p>
        </div>

        <div className="space-y-20">
          {competitions.map((competition) => (
            <article key={competition.title} className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={competition.cover}
                    alt={competition.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Concours
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {competition.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {competition.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {competition.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto pb-4">
                <div className="flex w-max gap-6">
                  {competition.pages.map((page, index) => (
                    <div
                      key={index}
                      className="w-[900px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black"
                    >
                      <div className="aspect-[297/210] w-full">
                        <img
                          src={page}
                          alt={`${competition.title} - page ${index + 1}`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cv" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            CV
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Mon curriculum vitae
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Consultez mes versions française et italienne pour découvrir mon
            parcours, mes formations, mes expériences et mes compétences.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">CV Français</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Version en français de mon curriculum vitae.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/CV-YVES-SONKOUE-F.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
                >
                  Ouvrir
                </a>
                <a
                  href="/CV-YVES-SONKOUE-F.pdf"
                  download
                  className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Télécharger
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">CV Italiano</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Versione italiana del mio curriculum vitae.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/CV-YVES-SONKOUE-I.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
                >
                  Apri
                </a>
                <a
                  href="/CV-YVES-SONKOUE-I.pdf"
                  download
                  className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Scarica
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Compétences
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Ce que je maîtrise
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Travaillons ensemble
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Vous pouvez me contacter par email, téléphone ou retrouver mon
            profil professionnel et mon univers visuel sur mes réseaux.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:sonkoemerlin@gmail.com"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black"
            >
              sonkoemerlin@gmail.com
            </a>
            <a
              href="tel:+393334610198"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white"
            >
              +39 3334610198
            </a>
            <a
              href="https://www.linkedin.com/in/yves-merlin-sonkoue-tatang-b6756b270?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/emrys_arc?igsh=MXV1NDl4NjFjOWZ1Mw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}