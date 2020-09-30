<style>
  .title {
    line-height: 1;
    color: #313d69;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (min-width: 450px) {
		.title {
			font-size: 20px;
		}
	}
</style>

<div class="title">
  <slot />
</div>

