<script>
	export let titleSpelling = 'N';
	export let title = 'eed';
	export let contentForward = 'Forward';
	export let contentBackward = 'Backward';
	export let contentBold = 'Bold';
  export let transition = '1.0s';
</script>

<h5 class="py-2" data-aos="fade-right" data-aos-easing="linear" style="color:#bbbbbb; transition:{transition}">
	<b style="text-shadow: 0.5px 1px 1px #303030; letter-spacing:2.0px;">
		<span style="color:#3b86c8;">{titleSpelling}</span>{title}
	</b>&nbsp;
	<span style="color:#707070; letter-spacing:-1px;"
		>{contentForward}
		<span style="color:#2d81cb;">{contentBold}</span>{contentBackward}
	</span>
</h5>
