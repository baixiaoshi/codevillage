![DA7E61BC-DA51-4D9F-927A-31B820DD2F1A](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/DA7E61BC-DA51-4D9F-927A-31B820DD2F1A.png?my-oss-process=baixs-notes)





这个图基本上说明了一个分区的文件系统的保存是怎样的

![5DD898DE-7F0B-444F-A019-F96300E12B9C](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/5DD898DE-7F0B-444F-A019-F96300E12B9C.png?my-oss-process=baixs-notes)







![8D8E4A0F-75DD-4D47-B88E-28C07DF86387](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/8D8E4A0F-75DD-4D47-B88E-28C07DF86387.png?my-oss-process=baixs-notes)





![8A6F6730-C9FD-480E-B86D-393F4F1D770C](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/8A6F6730-C9FD-480E-B86D-393F4F1D770C.png?my-oss-process=baixs-notes)





![3C03E7B9-E861-4B74-8630-2871DF821138](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/3C03E7B9-E861-4B74-8630-2871DF821138.png?my-oss-process=baixs-notes)





![A6400DDA-F45A-4740-9D17-A20C3CE5A036](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/A6400DDA-F45A-4740-9D17-A20C3CE5A036.png?my-oss-process=baixs-notes)







![94AFAA50-1F66-4601-805B-6E596666C1A1](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/94AFAA50-1F66-4601-805B-6E596666C1A1.png?my-oss-process=baixs-notes)







![4D856876-D34C-48A2-9771-18FC40888016](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/4D856876-D34C-48A2-9771-18FC40888016.png?my-oss-process=baixs-notes)





![1D9E903B-418A-46A7-A2BF-6B7F50D31BF5](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/1D9E903B-418A-46A7-A2BF-6B7F50D31BF5.png?my-oss-process=baixs-notes)







![7D5F90FE-281B-4348-B46D-6312C6A34D00](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/7D5F90FE-281B-4348-B46D-6312C6A34D00.png?my-oss-process=baixs-notes)





**这里是硬链接和符号链接的实现原理**



最终其实我们操作的还是文件



![7F60114D-2781-47B3-869B-D25769442525](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/7F60114D-2781-47B3-869B-D25769442525.png?my-oss-process=baixs-notes)



内核进程打开文件为何需要用file结构体来关联



![29E0A40D-2FA8-41F7-9E54-4C267CE5DEB7](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/29E0A40D-2FA8-41F7-9E54-4C267CE5DEB7.png?my-oss-process=baixs-notes)





![B398E4C2-4EF9-46A2-8D82-11C9CDE0163E](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/B398E4C2-4EF9-46A2-8D82-11C9CDE0163E.png?my-oss-process=baixs-notes)







![E38B6360-3A17-403D-8664-7667949405BD](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/E38B6360-3A17-403D-8664-7667949405BD.png?my-oss-process=baixs-notes)

**inode结构体保存的是实际的文件原信息以及具体文件内容数据块的指针，而file结构体保存的是进程打开文件操作的实时状态，譬如是否上锁，**

**譬如读到第几行，譬如可读可写等。因为进程要是用inode内容，所以必须封装一层file结构来解释操作状态，很合理**

![C8CFC5AB-5631-497A-B536-C1F72B7ACD97](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/C8CFC5AB-5631-497A-B536-C1F72B7ACD97.png?my-oss-process=baixs-notes)





![E9129C20-84FF-43B1-9072-1DEF0AA67BA5](https://baixsnotebook.oss-cn-hangzhou.aliyuncs.com/imgs/E9129C20-84FF-43B1-9072-1DEF0AA67BA5.png?my-oss-process=baixs-notes)









字符设备和块设备是两种不同类型的设备，它们的根本区别在于数据访问方式、缓冲区管理和I/O操作等方面有所不同。



### **字符设备（Character Devices）**

**数据访问方式**：

- 字符设备以字符为单位进行数据读写，每个字符都是独立处理的，没有固定的块大小。例如，键盘、鼠标、终端等设备通常被视为字符设备。

**缓冲区管理**：

- 通常不会有硬件缓冲区，数据从设备直接传输到内存或者从内存直接传输到设备，不需要额外的缓冲区。

**I/O操作**：

- 字符设备的 I/O 操作是以字符为单位进行的，可以是单个字符的读写。

**不规则的数据传输**：

- 字符设备的数据传输往往是不规则的，因此无法按照块的方式进行操作。例如，串口设备、键盘等都是以字符为单位处理数据的。

### **块设备（Block Devices）**

**数据访问方式**：

- 块设备以固定大小的块为单位进行数据读写，典型的块大小为512字节或4KB。硬盘驱动器、固态硬盘等通常被视为块设备。

**缓冲区管理**：

- 通常有硬件和操作系统的缓冲区管理，数据可以在设备和内存之间进行缓存操作，可以按照块的方式进行读写。

**I/O操作**：

- 块设备的 I/O 操作是以块为单位进行的，通常涉及大块数据的传输。

**规则的数据传输**：

- 块设备的数据传输是按照固定大小的块进行的，使得文件系统可以方便地进行块级别的管理和操作。

总的来说，字符设备和块设备的区别在于数据访问方式、缓冲区管理和数据传输的规则性。字符设备以字符为单位处理数据，而块设备以固定大小的块进行数据处理，这导致了在操作系统层面它们的处理方式和管理方式不同。

文件描述符在linux源码中其实就是进程关联的文件列表

```c
struct task_struct {

  ...

  /* Filesystem information: */

  struct fs_struct    *fs;

   

  /* Open file information: */

  struct files_struct    *files;

  ...

}

struct files_struct {

  ...

  struct fdtable fdtab;

  ...

  struct file __rcu * fd_array[NR_OPEN_DEFAULT];

};

struct file {

  ...

  struct inode    *f_inode;  /* cached value */

  ...

  const struct file_operations  *f_op;

  struct address_space  *f_mapping;

}

# 这其实是一个接口 interface，文件系统和socket系统就是继承实现这些指针函数的

struct file_operations {

  ...

  ssize_t (*read) (struct file *, char __user *, size_t, loff_t *);

  ssize_t (*write) (struct file *, const char __user *, size_t, loff_t *);

  int (*open) (struct inode *, struct file *);

  int (*flush) (struct file *, fl_owner_t id);

  int (*release) (struct inode *, struct file *);

  int (*fsync) (struct file *, loff_t, loff_t, int datasync);

  int (*fasync) (int, struct file *, int);

  int (*lock) (struct file *, int, struct file_lock *);

  ....

}

# socket的继承实现

static const struct file_operations socket_file_ops = {

  .owner =  THIS_MODULE,

  .llseek =  no_llseek,

  .read_iter =  sock_read_iter,

  .write_iter =  sock_write_iter,

  .poll =    sock_poll,

  .unlocked_ioctl = sock_ioctl,

\#ifdef CONFIG_COMPAT

  .compat_ioctl = compat_sock_ioctl,

\#endif

  .mmap =    sock_mmap,

  .release =  sock_close,

  .fasync =  sock_fasync,

  .sendpage =  sock_sendpage,

  .splice_write = generic_splice_sendpage,

  .splice_read =  sock_splice_read,

  .show_fdinfo =  sock_show_fdinfo,

};
```





rootfs是创建 /bin /dev /etc /lib /lib64 /sbin /proc /sys /tmp /var目录的

/proc 和/sys这两兄弟，一个是初始化目录，一个是展示系统信息，都是继承了vfs来展示在用户空间

**/proc** 和 **/sys** 是两个不同的虚拟文件系统，用于提供对内核和系统信息的访问。它们通过 VFS（Virtual File System，虚拟文件系统）层来与用户空间进行交互。下面简要介绍它们在 VFS 中的展现：

### **/proc** **虚拟文件系统：**

**/proc** 目录下的文件和子目录主要提供了对进程和内核状态的访问。以下是 **/proc** 在 VFS 中的展现：

**/proc** **目录本身：**

- 在 VFS 中，**/proc** 被表示为一个虚拟目录，通过 VFS 接口提供了对不同进程和系统信息的访问。

**进程相关信息：**

- 每个运行中的进程都在 **/proc** 中有一个以进程ID为名的子目录，例如 **/proc/1234**。在这个子目录中，有一系列文件和目录用于显示和配置与该进程有关的信息，如 **/proc/1234/cmdline**、**/proc/1234/status** 等。

**系统信息：**

- **/proc** 中有一些文件，如 **/proc/cpuinfo**、**/proc/meminfo** 等，用于显示系统的硬件和内存信息。

### **/sys** **虚拟文件系统：**

**/sys** 也是一个虚拟文件系统，提供了对设备、总线和内核参数的访问。以下是 **/sys** 在 VFS 中的展现：

**/sys** **目录本身：**

- 类似于 **/proc**，**/sys** 也被表示为一个虚拟目录，通过 VFS 接口提供了对不同设备和内核信息的访问。

**设备和总线信息：**

- 在 **/sys** 中，设备和总线信息被组织在不同的目录下，如 **/sys/block** 用于块设备、**/sys/class** 用于设备类别等。

**内核参数：**

- **/sys** 中有一些文件，用于读取和设置内核参数，例如 **/sys/kernel/version** 用于显示内核版本。

总的来说，**/proc** 主要关注进程和系统状态，而 **/sys** 主要关注设备、总线和内核参数。它们都是通过 VFS 接口来与用户空间进行交互，提供对内核和系统信息的动态访问。





参考**《linux内核完全注释》书籍pdf**

这里介绍网络fd socket与内核实现

[https://github.com/0voice/linux_kernel_wiki/blob/main/%E6%96%87%E7%AB%A0/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE%E6%A0%88/Linux%E7%BD%91%E7%BB%9C%E6%BA%90%E4%BB%A3%E7%A0%81%E5%AD%A6%E4%B9%A0%E2%80%94%E2%80%94%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D.md](https://github.com/0voice/linux_kernel_wiki/blob/main/文章/网络协议栈/Linux网络源代码学习——整体介绍.md)