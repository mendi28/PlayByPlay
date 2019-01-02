import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'pbp-ball',
  styleUrl: 'ball.css'
})
export class Ball {
  @Prop() position: {
    top: number
    left: number
  };
  @Prop() opacity: number;

  render() {
    return (
      <div class="ball" style={{ left: `${this.position.left*100}%`, top: `${this.position.top*100}%`, opacity: this.opacity ? `${this.opacity}` : '1' }} />
    );
  }
}
