<template>
    <div class="navbar">
        <div class="navbar-left">
            <div class="navbar-left-item01">
                Store 01
            </div>
            <div class="navbar-left-item02">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                  <path fill="#006A4D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><circle fill="#F42A41" cx="16" cy="17.5" r="7"/>
                </svg>
                <div class="dateNtime">
                    <span>{{ formattedDate }}</span>
                </div>
            </div>
        </div>
        <div class="navbar-right">
            <div class="navbar-right-item01">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="#ffffff" d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40Zm80-64v128a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8Zm-16 46.35A56.78 56.78 0 0 1 193.65 72H62.35A56.78 56.78 0 0 1 24 110.35v35.3A56.78 56.78 0 0 1 62.35 184h131.3A56.78 56.78 0 0 1 232 145.65Z"/></svg>
                <span>POS</span>
            </div>
            <div class="navbar-right-item02">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M1 21V4h22v17H1Zm2-2h18V6H3v13Zm5-2h8v-1H8v1Zm-3-3h2v-2H5v2Zm4 0h2v-2H9v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM5 10h2V8H5v2Zm4 0h2V8H9v2Zm4 0h2V8h-2v2Zm4 0h2V8h-2v2ZM3 19V6v13Z"/></svg>
            </div>
            <div class="navbar-right-item03">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12.8 23q-2.05 0-3.85-.938T6 19.45L1.2 12.4l.475-.475q.5-.525 1.238-.6t1.337.35l2.75 1.9V4q0-.425.288-.713T8 3q.425 0 .713.288T9 4v8h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v10h2V3q0-.425.288-.713T16 2q.425 0 .713.288T17 3v9h2V5q0-.425.288-.713T20 4q.425 0 .713.288T21 5v9.8q0 3.425-2.388 5.813T12.8 23Z"/></svg>
            </div>
            <div class="navbar-right-item04">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.02v1.01m0-6.02v.94m0 7.54c3.5 0 6-1.24 6-4c0-3-1.5-5-4.5-6.5l1.18-1.52a.66.66 0 0 0-.56-1H4.88a.66.66 0 0 0-.56 1L5.5 3C2.5 4.51 1 6.51 1 9.51c0 2.74 2.5 3.98 6 3.98Z"/><path d="M6 9.56A1.24 1.24 0 0 0 7 10a1.12 1.12 0 0 0 1.19-1A1.12 1.12 0 0 0 7 8a1.12 1.12 0 0 1-1.19-1A1.11 1.11 0 0 1 7 6a1.26 1.26 0 0 1 1 .4"/></g></svg>
                <span>CASHBOOK</span>
            </div>
            <div class="navbar-right-item05">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M2 16v-2h2v2H2Zm0-4v-2h2v2H2Zm0-4V6h2v2H2Zm4 8v-2h4v2H6Zm0-4v-2h13v2H6Zm0-4V6h13v2H6Zm9.95 12l-4.25-4.25l1.425-1.425l2.825 2.825l5.65-5.65l1.4 1.45L15.95 20Z"/></svg>
                <span>INVOICE</span>
            </div>
            <div class="navbar-right-item06">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div class="navbar-right-item07">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></svg>
            </div>
            <div class="navbar-right-item08">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"/></svg>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      formattedDate: "",
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      const currentDate = new Date();
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      const year = currentDate.getFullYear();
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      this.formattedDate = `${month} ${day}, ${year}, ${this.formatTime(
        hours
      )}:${this.formatTime(minutes)}:${this.formatTime(seconds)} ${ampm}`;
    },
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    },
  },
};
</script>