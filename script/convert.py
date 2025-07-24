import os
import subprocess
import argparse
from pathlib import Path

def convert_to_webp(input_path):
    """
    使用cwebp将JPG文件转换为WebP格式
    
    参数:
    input_path (str): JPG文件路径
    quality (int): 压缩质量，范围0-100
    lossless (bool): 是否使用无损压缩
    """
    # 构建输出文件路径
    output_path = os.path.splitext(input_path)[0] + '.webp'
    
    # 构建cwebp命令
    cmd = ['.\cwebp.exe','-q','70','-low_memory','-af','-jpeg_like','-m','6','-mt','-progress',input_path,'-o',output_path]
    try:
        # 执行命令
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        print(f"成功: {input_path} -> {output_path}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"错误: 转换 {input_path} 时出错\n{e.stderr}")
        return False
    except Exception as e:
        print(f"错误: 执行命令时发生未知错误: {e}")
        return False

def process_directory(directory, recursive=True):
    """
    处理目录中的所有JPG文件
    
    参数:
    directory (str): 目录路径
    quality (int): 压缩质量
    lossless (bool): 是否使用无损压缩
    recursive (bool): 是否递归处理子目录
    """
    # 确保目录存在
    if not os.path.isdir(directory):
        print(f"错误: 目录 {directory} 不存在")
        return
    
    # 统计信息
    total_files = 0
    success_files = 0
    
    # 遍历目录
    if recursive:
        for root, _, files in os.walk(directory):
            for file in files:
                if file.lower().endswith(('.jpg', '.jpeg')):
                    file_path = os.path.join(root, file)
                    total_files += 1
                    if convert_to_webp(file_path):
                        success_files += 1
    else:
        for file in os.listdir(directory):
            if file.lower().endswith(('.jpg', '.jpeg')):
                file_path = os.path.join(directory, file)
                total_files += 1
                if convert_to_webp(file_path):
                    success_files += 1
    
    print(f"\n处理完成:")
    print(f"总JPG文件数: {total_files}")
    print(f"成功转换数: {success_files}")
    print(f"失败数: {total_files - success_files}")

def main():
    """主函数，处理命令行参数"""
    parser = argparse.ArgumentParser(description='JPG转WebP图片压缩工具')
    parser.add_argument('directory', help='要处理的目录路径')
    parser.add_argument('-r', '--recursive', action='store_true', 
                        help='递归处理子目录')
    
    args = parser.parse_args()
    
    process_directory(args.directory, args.recursive)

if __name__ == "__main__":
    main()    