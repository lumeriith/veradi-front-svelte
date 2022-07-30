<script>
  import { Card, Input, Alert, Image } from 'sveltestrap';
  import PdfViewer from 'svelte-pdf';

  import close from '$lib/static/img/default/close.svg';
  import GeneralRules from '$lib/static/pdf/register/VeradiGeneralRules.pdf';
  
  export let onClose = () => {};
</script>

<Card
	class="tw-absolute z-10 tw-rounded-none sm:tw-rounded-xl tw-align-middle"
>
<row class="tw-justify-end tw-flex">
  <a>
    <Image src={close} style="width:5%" />
  </a>
</row>
<div>
  <PdfViewer url={GeneralRules} />
</div>

</Card>