<script>
import { VeradiUrl } from "../url/VeradiUrl.svelte";
import VeradiNavBar from "./BaseNavBar.svelte";

	const items = [
    {
      text: "구성원 소개",
      children:
      [
        {text: "수학팀", href: VeradiUrl.introMath},
        {text: "물리학1팀", href: VeradiUrl.introPhysics},
        {text: "화학1팀", href: VeradiUrl.introChemistry},
        {text: "생명과학1팀", href: VeradiUrl.introBiology},
        {text: "지구과학1팀", href: VeradiUrl.introEarthscience},
        {text: "생활과윤리팀", href: VeradiUrl.introLifeethics},
        {text: "사회문화팀", href: VeradiUrl.introSocialculture},
      ]
    },
    {
      text: "채용",
      href: VeradiUrl.hireWelfare
    },
    {
      text: "출판물",
      children: []
    },
    {
      text: "학습/입시",
      children: []
    },
    {
      text: "제보",
      children: []
    },
  ];
</script>

<VeradiNavBar items={items}></VeradiNavBar>