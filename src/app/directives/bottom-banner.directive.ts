import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBottomBanner]'
})
export class BottomBannerDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.onWindowScroll(); // Call onWindowScroll() on page load
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    const bannerData = localStorage.getItem('banner');
    const isBannerHidden = bannerData ? JSON.parse(bannerData).hidden : false;

    // Check if scrolled to the bottom and banner is not hidden
    if (scrollPosition + windowHeight >= documentHeight && !isBannerHidden) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }
}