import React, { useState } from 'react'
import { Wrapper } from '../atoms'
import { PostCard } from '../molecules'

const girls = [
  {
    id: 1,
    name: 'yingxuange',
    caption: 'Hai kamu... temenin aku dong.',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/5f1cd6c0f70bddc322aeeedff327ec29/5D5CEE5C/t51.2885-15/e35/c0.135.1080.1080a/s320x320/54247250_314001769283723_6020327725034903557_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=111'
  },
  {
    id: 2,
    name: 'Lisa Blackpink',
    caption: 'aye aye!!!',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/3e1950853d3756942208beae8a918688/5D5521E5/t51.2885-15/e35/c135.0.810.810a/s320x320/57449790_135446864201995_8610871014275093793_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=1'
  },
  {
    id: 3,
    name: 'yingxuange',
    caption: 'halooooooooo semua',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/3cae27afbf25f62e46991f002b1b90da/5D57D31F/t51.2885-15/e35/s320x320/57156457_1245092055645951_8538372257498708087_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=103'
  },
  {
    id: 4,
    name: 'Lisa Blackpink',
    caption: 'ddu ddu dduuu..',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/b700bbebabda87b2f91b579e2bd39100/5D584058/t51.2885-15/e35/c0.135.1080.1080a/s320x320/57426318_1312172455625854_751500325964438900_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=1'
  },
  {
    id: 5,
    name: 'yingxuange',
    caption: 'Senyum pepsodent',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/6f0cf5d5b4e3d7a2f06452986554c15b/5D77BC1C/t51.2885-15/e35/c0.135.1080.1080a/s320x320/50924470_811560329203124_1082465612979798106_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=108'
  },
  {
    id: 6,
    name: 'Lisa Blackpink',
    caption: 'Kepiting kalo dipotong jadi apa?..... kepotong :)))',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/83b06551aabb4996fe756b329d1308e8/5D5216BC/t51.2885-15/e35/s320x320/58410880_131078294664043_5405270240152753896_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=1'
  },
  {
    id: 7,
    name: 'yingxuange',
    caption: 'apa ya duhhhh',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/1308ce1c1cffd7779335eafb774f1f56/5D55CB37/t51.2885-15/e35/c0.135.1080.1080a/s320x320/51939290_812836582389902_8911076139682962158_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=102'
  },
  {
    id: 8,
    name: 'Lisa Blackpink',
    caption: 'oh my my my... eh salah lagu',
    url: 'https://instagram.fcgk2-1.fna.fbcdn.net/vp/f07f9a40f147f6c4205fdacbc7beb632/5D7481CE/t51.2885-15/e35/c179.0.722.722/s320x320/57156399_192199008414598_7594752112175307626_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=1'
  },
]

const PostCardList = () => {
  const [posts] = useState(girls)

  return (
    <Wrapper style={{ marginTop: '80px' }}>
      {posts && posts.map(post => {
        return (
          <PostCard key={post.id} data={post} />
        )
      })}
    </Wrapper>
  )
}

export default PostCardList