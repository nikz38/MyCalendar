export default function(){
  this.transition(
    this.fromRoute('calendar'),
    this.toRoute('event'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('calendar'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('event'),
    this.use('toDown'),
    this.reverse('toUp')
  );
};