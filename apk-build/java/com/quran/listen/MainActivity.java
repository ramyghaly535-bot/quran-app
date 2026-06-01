package com.quran.listen;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends Activity {

    private static final String TARGET_URL = "https://my-project-ramy1.vercel.app";
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Set immersive full-screen flags
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            getWindow().setDecorFitsSystemWindows(false);
        }
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );

        // Set status bar color
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getWindow().setStatusBarColor(Color.parseColor("#0D3B0F"));
            getWindow().setNavigationBarColor(Color.parseColor("#0D3B0F"));
        }

        // Enable smooth transitions
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getWindow().setExitTransition(null);
            getWindow().setEnterTransition(null);
        }

        // Create WebView
        webView = new WebView(this);
        setContentView(webView);

        configureWebView();
        webView.loadUrl(TARGET_URL);
    }

    private void configureWebView() {
        WebSettings settings = webView.getSettings();

        // Enable JavaScript
        settings.setJavaScriptEnabled(true);

        // Modern WebView features
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);

        // Enable file access for potential local content
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);

        // Mixed content mode - allow for HTTPS site
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        }

        // Cache configuration
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

        // Text scaling and zoom
        settings.setTextZoom(100);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);

        // Enable multi-touch zoom
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);

        // Support different viewport modes
        settings.setSupportZoom(false);

        // Enable smooth scrolling
        settings.setEnableSmoothTransition(true);

        // User agent
        String userAgent = settings.getUserAgentString();
        settings.setUserAgentString(userAgent + " QuranListenApp/1.0");

        // Allow third-party cookies
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
        CookieManager.getInstance().setAcceptCookie(true);

        // WebView client - handle URL loading
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                // Keep all navigation within the WebView
                if (url.contains("my-project-ramy1.vercel.app") || 
                    url.contains("vercel.app")) {
                    return false;
                }
                // Open external links in browser
                view.getContext().startActivity(
                    new android.content.Intent(
                        android.content.Intent.ACTION_VIEW,
                        android.net.Uri.parse(url))
                );
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request,
                    android.webkit.WebResourceError error) {
                if (request.isForMainFrame()) {
                    showErrorAndRetry();
                }
            }
        });

        // Chrome client for progress, geolocation, etc.
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onGeolocationPermissionsShowPrompt(String origin,
                    GeolocationPermissions.Callback callback) {
                callback.invoke(origin, true, false);
            }

            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                // Progress tracking available if needed
            }
        });
    }

    private void showErrorAndRetry() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(MainActivity.this, 
                    "Connection error. Retrying...", 
                    Toast.LENGTH_SHORT).show();
                webView.loadUrl(TARGET_URL);
            }
        });
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        webView.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        webView.onPause();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
