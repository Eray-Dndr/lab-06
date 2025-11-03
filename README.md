Eray Dündar 220404932
Uygulamayı Çalıştırmak İçin Gerekli Talimatlar

[cite_start]Bu projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin[cite: 10]:

1.  **Projeyi klonlayın ve dizine gidin:**
    ```bash
    git clone [SİZİN-GİTHUB-REPO-LİNKİNİZ]
    cd ProfileApp
    ```

2.  **Gerekli bağımlılıkları yükleyin:**
    Proje `react-native-safe-area-context` [cite: 27] gibi özel Expo paketleri içermektedir. Tüm bağımlılıkları doğru kurmak için `npx expo install` komutunu çalıştırın:
    ```bash
    npx expo install
    ```
    (Alternatif olarak `npm install` da kullanılabilir)

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npx expo start
    ```

4.  **Cihazınızda çalıştırın:**
    Terminalde görünen QR kodu, telefonunuzdaki **Expo Go** uygulaması [cite: 6] ile tarayın. Uygulama otomatik olarak açılacaktır.
