import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isConnecting: boolean = false;
  isConnected: boolean = false;
  isRequestPending: boolean = false; // Controla las solicitudes pendientes
  isDarkMode: boolean = false;

  @ViewChild('metamaskLogo') metamaskLogo!: ElementRef;

  constructor(private router: Router) {
    this.loadDarkModePreference();
    this.checkMetaMaskConnection();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.metamaskLogo) {
      const logoElement = this.metamaskLogo.nativeElement as HTMLElement;

      // Obtener el centro del contenedor del logo
      const rect = logoElement.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      // Calcular la diferencia entre el puntero del mouse y el centro del logo
      const deltaX = event.clientX - logoCenterX;
      const deltaY = event.clientY - logoCenterY;

      // Aplicar la transformación en 3D
      const rotateX = (deltaY / rect.height) * 10; // Ajustar para limitar el ángulo de rotación
      const rotateY = -(deltaX / rect.width) * 10;

      logoElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }

  async checkMetaMaskConnection() {
    const { ethereum } = window as any;

    if (ethereum && ethereum.isMetaMask) {
      try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          this.isConnected = true;
          localStorage.setItem('metamaskAccount', accounts[0]);
          console.log('MetaMask ya estaba conectada:', accounts[0]);
        }
      } catch (error) {
        console.error('Error al verificar la conexión a MetaMask:', error);
      }
    }
  }

  async connectMetaMask() {
    if (this.isRequestPending) {
      console.log('Ya hay una solicitud en proceso. Por favor, espera.');
      return;
    }

    const { ethereum } = window as any;

    if (!ethereum) {
      alert('MetaMask no está instalada. Por favor, instálala para continuar.');
      return;
    }

    if (this.isConnected) {
      console.log('MetaMask ya está conectada.');
      return;
    }

    this.isConnecting = true;
    this.isRequestPending = true; // Marca que hay una solicitud en curso

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts && accounts.length > 0) {
        const account = accounts[0];
        console.log('Cuenta conectada:', account);
        localStorage.setItem('metamaskAccount', account);
        this.isConnected = true;
        this.router.navigate(['/dashboard']);
      } else {
        alert('No se encontraron cuentas en MetaMask.');
      }
    } catch (error: any) {
      if (error.code === -32002) {
        alert('Ya hay una solicitud en proceso. Por favor, espera.');
      } else {
        console.error('Error al conectar MetaMask:', error);
        alert('Hubo un problema al conectar MetaMask. Inténtalo nuevamente.');
      }
    } finally {
      this.isConnecting = false;
      this.isRequestPending = false; // Restablece la solicitud pendiente
    }
  }

  login() {
    if (!this.email || !this.password) {
      alert('Por favor ingresa tu correo electrónico y contraseña.');
      return;
    }
    console.log('Redirigiendo al dashboard...');
    this.router.navigate(['/dashboard']);
  }

  disconnectMetaMask() {
    this.isConnected = false;
    localStorage.removeItem('metamaskAccount');
    console.log('MetaMask desconectada.');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', this.isDarkMode ? 'enabled' : 'disabled');
  }

  loadDarkModePreference() {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'enabled') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
