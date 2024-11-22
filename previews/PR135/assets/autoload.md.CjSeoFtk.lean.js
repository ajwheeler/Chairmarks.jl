import{_ as s,c as a,a5 as t,o as e}from"./chunks/framework.CgG5qlUk.js";const c=JSON.parse('{"title":"How to integrate Chairmarks into your workflow","description":"","frontmatter":{},"headers":[],"relativePath":"autoload.md","filePath":"autoload.md","lastUpdated":null}'),n={name:"autoload.md"};function l(o,i,r,h,p,d){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="installation" tabindex="-1">How to integrate Chairmarks into your workflow <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;How to integrate Chairmarks into your workflow {#installation}&quot;">​</a></h1><p>There are several ways to use Chairmarks in your interactive sessions, ordered from simplest to install first to most streamlined user experience last.</p><ol><li><p>Add Chairmarks to your default environment with <code>import Pkg; Pkg.activate(); Pkg.add(&quot;Chairmarks&quot;)</code>. Chairmarks has no non-stdlib dependencies, and precompiles in less than one second, so this should not have any adverse impacts on your environments nor slow load times nor package instillation times.</p></li><li><p>Add Chairmarks to your default environment and put <code>isinteractive() &amp;&amp; using Chairmarks</code> in your startup.jl file. This will make Chairmarks available in all your REPL sessions while still requiring an explicit load in scripts and packages. This will slow down launching a new Julia session by a few milliseconds (for comparison, this is about 20x faster than loading <code>Revise</code> in your startup.jl file).</p></li><li><p>[<strong>Recommended</strong>] Add Chairmarks and <a href="https://github.com/LilithHafner/BasicAutoloads.jl" target="_blank" rel="noreferrer">BasicAutoloads</a> to your default environment and put the following script in your startup.jl file to automatically load it when you type <code>@b</code> or <code>@be</code> in the REPL:</p></li></ol><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinteractive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BasicAutoloads</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasicAutoloads</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">register_autoloads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@be&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Chairmarks),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div>`,4)]))}const u=s(n,[["render",l]]);export{c as __pageData,u as default};
