<template><div><p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/DA7E61BC-DA51-4D9F-927A-31B820DD2F1A.png?my-oss-process=baixs-notes" alt="DA7E61BC-DA51-4D9F-927A-31B820DD2F1A"></p>
<p>这个图基本上说明了一个分区的文件系统的保存是怎样的</p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/5DD898DE-7F0B-444F-A019-F96300E12B9C.png?my-oss-process=baixs-notes" alt="5DD898DE-7F0B-444F-A019-F96300E12B9C"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/8D8E4A0F-75DD-4D47-B88E-28C07DF86387.png?my-oss-process=baixs-notes" alt="8D8E4A0F-75DD-4D47-B88E-28C07DF86387"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/8A6F6730-C9FD-480E-B86D-393F4F1D770C.png?my-oss-process=baixs-notes" alt="8A6F6730-C9FD-480E-B86D-393F4F1D770C"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/3C03E7B9-E861-4B74-8630-2871DF821138.png?my-oss-process=baixs-notes" alt="3C03E7B9-E861-4B74-8630-2871DF821138"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/A6400DDA-F45A-4740-9D17-A20C3CE5A036.png?my-oss-process=baixs-notes" alt="A6400DDA-F45A-4740-9D17-A20C3CE5A036"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/94AFAA50-1F66-4601-805B-6E596666C1A1.png?my-oss-process=baixs-notes" alt="94AFAA50-1F66-4601-805B-6E596666C1A1"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/4D856876-D34C-48A2-9771-18FC40888016.png?my-oss-process=baixs-notes" alt="4D856876-D34C-48A2-9771-18FC40888016"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/1D9E903B-418A-46A7-A2BF-6B7F50D31BF5.png?my-oss-process=baixs-notes" alt="1D9E903B-418A-46A7-A2BF-6B7F50D31BF5"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/7D5F90FE-281B-4348-B46D-6312C6A34D00.png?my-oss-process=baixs-notes" alt="7D5F90FE-281B-4348-B46D-6312C6A34D00"></p>
<p><strong>这里是硬链接和符号链接的实现原理</strong></p>
<p>最终其实我们操作的还是文件</p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/7F60114D-2781-47B3-869B-D25769442525.png?my-oss-process=baixs-notes" alt="7F60114D-2781-47B3-869B-D25769442525"></p>
<p>内核进程打开文件为何需要用file结构体来关联</p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/29E0A40D-2FA8-41F7-9E54-4C267CE5DEB7.png?my-oss-process=baixs-notes" alt="29E0A40D-2FA8-41F7-9E54-4C267CE5DEB7"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/B398E4C2-4EF9-46A2-8D82-11C9CDE0163E.png?my-oss-process=baixs-notes" alt="B398E4C2-4EF9-46A2-8D82-11C9CDE0163E"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/E38B6360-3A17-403D-8664-7667949405BD.png?my-oss-process=baixs-notes" alt="E38B6360-3A17-403D-8664-7667949405BD"></p>
<p><strong>inode结构体保存的是实际的文件原信息以及具体文件内容数据块的指针，而file结构体保存的是进程打开文件操作的实时状态，譬如是否上锁，</strong></p>
<p><strong>譬如读到第几行，譬如可读可写等。因为进程要是用inode内容，所以必须封装一层file结构来解释操作状态，很合理</strong></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/C8CFC5AB-5631-497A-B536-C1F72B7ACD97.png?my-oss-process=baixs-notes" alt="C8CFC5AB-5631-497A-B536-C1F72B7ACD97"></p>
<p><img src="https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/E9129C20-84FF-43B1-9072-1DEF0AA67BA5.png?my-oss-process=baixs-notes" alt="E9129C20-84FF-43B1-9072-1DEF0AA67BA5"></p>
<p>字符设备和块设备是两种不同类型的设备，它们的根本区别在于数据访问方式、缓冲区管理和I/O操作等方面有所不同。</p>
<h3 id="字符设备-character-devices" tabindex="-1"><a class="header-anchor" href="#字符设备-character-devices"><span><strong>字符设备（Character Devices）</strong></span></a></h3>
<p><strong>数据访问方式</strong>：</p>
<ul>
<li>字符设备以字符为单位进行数据读写，每个字符都是独立处理的，没有固定的块大小。例如，键盘、鼠标、终端等设备通常被视为字符设备。</li>
</ul>
<p><strong>缓冲区管理</strong>：</p>
<ul>
<li>通常不会有硬件缓冲区，数据从设备直接传输到内存或者从内存直接传输到设备，不需要额外的缓冲区。</li>
</ul>
<p><strong>I/O操作</strong>：</p>
<ul>
<li>字符设备的 I/O 操作是以字符为单位进行的，可以是单个字符的读写。</li>
</ul>
<p><strong>不规则的数据传输</strong>：</p>
<ul>
<li>字符设备的数据传输往往是不规则的，因此无法按照块的方式进行操作。例如，串口设备、键盘等都是以字符为单位处理数据的。</li>
</ul>
<h3 id="块设备-block-devices" tabindex="-1"><a class="header-anchor" href="#块设备-block-devices"><span><strong>块设备（Block Devices）</strong></span></a></h3>
<p><strong>数据访问方式</strong>：</p>
<ul>
<li>块设备以固定大小的块为单位进行数据读写，典型的块大小为512字节或4KB。硬盘驱动器、固态硬盘等通常被视为块设备。</li>
</ul>
<p><strong>缓冲区管理</strong>：</p>
<ul>
<li>通常有硬件和操作系统的缓冲区管理，数据可以在设备和内存之间进行缓存操作，可以按照块的方式进行读写。</li>
</ul>
<p><strong>I/O操作</strong>：</p>
<ul>
<li>块设备的 I/O 操作是以块为单位进行的，通常涉及大块数据的传输。</li>
</ul>
<p><strong>规则的数据传输</strong>：</p>
<ul>
<li>块设备的数据传输是按照固定大小的块进行的，使得文件系统可以方便地进行块级别的管理和操作。</li>
</ul>
<p>总的来说，字符设备和块设备的区别在于数据访问方式、缓冲区管理和数据传输的规则性。字符设备以字符为单位处理数据，而块设备以固定大小的块进行数据处理，这导致了在操作系统层面它们的处理方式和管理方式不同。</p>
<p>文件描述符在linux源码中其实就是进程关联的文件列表</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">task_struct</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Filesystem information: */</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">fs_struct</span>    <span class="token operator">*</span>fs<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   </span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* Open file information: */</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">files_struct</span>    <span class="token operator">*</span>files<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">files_struct</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">fdtable</span> fdtab<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">file</span> __rcu <span class="token operator">*</span> fd_array<span class="token punctuation">[</span>NR_OPEN_DEFAULT<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">inode</span>    <span class="token operator">*</span>f_inode<span class="token punctuation">;</span>  <span class="token comment">/* cached value */</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">file_operations</span>  <span class="token operator">*</span>f_op<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">struct</span> <span class="token class-name">address_space</span>  <span class="token operator">*</span>f_mapping<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># 这其实是一个接口 interface，文件系统和socket系统就是继承实现这些指针函数的</span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">file_operations</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">  <span class="token class-name">ssize_t</span> <span class="token punctuation">(</span><span class="token operator">*</span>read<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">char</span> __user <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token class-name">size_t</span><span class="token punctuation">,</span> <span class="token class-name">loff_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token class-name">ssize_t</span> <span class="token punctuation">(</span><span class="token operator">*</span>write<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> __user <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token class-name">size_t</span><span class="token punctuation">,</span> <span class="token class-name">loff_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>open<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">inode</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>flush<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token class-name">fl_owner_t</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>release<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">inode</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fsync<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token class-name">loff_t</span><span class="token punctuation">,</span> <span class="token class-name">loff_t</span><span class="token punctuation">,</span> <span class="token keyword">int</span> datasync<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fasync<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>lock<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">file</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">file_lock</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">socket</span><span class="token expression">的继承实现</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">file_operations</span> socket_file_ops <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>owner <span class="token operator">=</span>  THIS_MODULE<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>llseek <span class="token operator">=</span>  no_llseek<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>read_iter <span class="token operator">=</span>  sock_read_iter<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>write_iter <span class="token operator">=</span>  sock_write_iter<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>poll <span class="token operator">=</span>    sock_poll<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>unlocked_ioctl <span class="token operator">=</span> sock_ioctl<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">\#ifdef CONFIG_COMPAT</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>compat_ioctl <span class="token operator">=</span> compat_sock_ioctl<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">\#endif</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>mmap <span class="token operator">=</span>    sock_mmap<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>release <span class="token operator">=</span>  sock_close<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>fasync <span class="token operator">=</span>  sock_fasync<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>sendpage <span class="token operator">=</span>  sock_sendpage<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>splice_write <span class="token operator">=</span> generic_splice_sendpage<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>splice_read <span class="token operator">=</span>  sock_splice_read<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">.</span>show_fdinfo <span class="token operator">=</span>  sock_show_fdinfo<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rootfs是创建 /bin /dev /etc /lib /lib64 /sbin /proc /sys /tmp /var目录的</p>
<p>/proc 和/sys这两兄弟，一个是初始化目录，一个是展示系统信息，都是继承了vfs来展示在用户空间</p>
<p><strong>/proc</strong> 和 <strong>/sys</strong> 是两个不同的虚拟文件系统，用于提供对内核和系统信息的访问。它们通过 VFS（Virtual File System，虚拟文件系统）层来与用户空间进行交互。下面简要介绍它们在 VFS 中的展现：</p>
<h3 id="proc-虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#proc-虚拟文件系统"><span><strong>/proc</strong> <strong>虚拟文件系统：</strong></span></a></h3>
<p><strong>/proc</strong> 目录下的文件和子目录主要提供了对进程和内核状态的访问。以下是 <strong>/proc</strong> 在 VFS 中的展现：</p>
<p><strong>/proc</strong> <strong>目录本身：</strong></p>
<ul>
<li>在 VFS 中，<strong>/proc</strong> 被表示为一个虚拟目录，通过 VFS 接口提供了对不同进程和系统信息的访问。</li>
</ul>
<p><strong>进程相关信息：</strong></p>
<ul>
<li>每个运行中的进程都在 <strong>/proc</strong> 中有一个以进程ID为名的子目录，例如 <strong>/proc/1234</strong>。在这个子目录中，有一系列文件和目录用于显示和配置与该进程有关的信息，如 <strong>/proc/1234/cmdline</strong>、<strong>/proc/1234/status</strong> 等。</li>
</ul>
<p><strong>系统信息：</strong></p>
<ul>
<li><strong>/proc</strong> 中有一些文件，如 <strong>/proc/cpuinfo</strong>、<strong>/proc/meminfo</strong> 等，用于显示系统的硬件和内存信息。</li>
</ul>
<h3 id="sys-虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#sys-虚拟文件系统"><span><strong>/sys</strong> <strong>虚拟文件系统：</strong></span></a></h3>
<p><strong>/sys</strong> 也是一个虚拟文件系统，提供了对设备、总线和内核参数的访问。以下是 <strong>/sys</strong> 在 VFS 中的展现：</p>
<p><strong>/sys</strong> <strong>目录本身：</strong></p>
<ul>
<li>类似于 <strong>/proc</strong>，<strong>/sys</strong> 也被表示为一个虚拟目录，通过 VFS 接口提供了对不同设备和内核信息的访问。</li>
</ul>
<p><strong>设备和总线信息：</strong></p>
<ul>
<li>在 <strong>/sys</strong> 中，设备和总线信息被组织在不同的目录下，如 <strong>/sys/block</strong> 用于块设备、<strong>/sys/class</strong> 用于设备类别等。</li>
</ul>
<p><strong>内核参数：</strong></p>
<ul>
<li><strong>/sys</strong> 中有一些文件，用于读取和设置内核参数，例如 <strong>/sys/kernel/version</strong> 用于显示内核版本。</li>
</ul>
<p>总的来说，<strong>/proc</strong> 主要关注进程和系统状态，而 <strong>/sys</strong> 主要关注设备、总线和内核参数。它们都是通过 VFS 接口来与用户空间进行交互，提供对内核和系统信息的动态访问。</p>
<p>参考**《linux内核完全注释》书籍pdf**</p>
<p>这里介绍网络fd socket与内核实现</p>
<p><a href="https://github.com/0voice/linux_kernel_wiki/blob/main/%E6%96%87%E7%AB%A0/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE%E6%A0%88/Linux%E7%BD%91%E7%BB%9C%E6%BA%90%E4%BB%A3%E7%A0%81%E5%AD%A6%E4%B9%A0%E2%80%94%E2%80%94%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D.md" target="_blank" rel="noopener noreferrer">https://github.com/0voice/linux_kernel_wiki/blob/main/%E6%96%87%E7%AB%A0/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE%E6%A0%88/Linux%E7%BD%91%E7%BB%9C%E6%BA%90%E4%BB%A3%E7%A0%81%E5%AD%A6%E4%B9%A0%E2%80%94%E2%80%94%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D.md</a></p>
</div></template>


